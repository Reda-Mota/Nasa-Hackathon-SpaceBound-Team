// NASA Debris Assistant — talks to a local AnythingLLM workspace (RAG)
(()=>{
 const cfg = window.RAG_CONFIG || {};
 let apiKey = cfg.apiKey || "";
 const WORKSPACE_SLUG = cfg.workspaceSlug || "aaaa";
 const API_BASE = (cfg.baseUrl || "http://localhost:3001").replace(/\/$/, "");
 const CHAT_ENDPOINT = API_BASE + "/api/v1/workspace/" + encodeURIComponent(WORKSPACE_SLUG) + "/chat";
 const keyToggle=document.getElementById("rag-key-toggle"),keyPanel=document.getElementById("rag-key-panel"),keyInput=document.getElementById("rag-key-input"),keySave=document.getElementById("rag-key-save");
 const form=document.getElementById("rag-form"),input=document.getElementById("rag-input"),box=document.getElementById("rag-messages"),send=document.getElementById("rag-send"),status=document.getElementById("rag-status"),chat=document.getElementById("rag-chat"),toggle=document.getElementById("rag-chat-toggle"),profileForm=document.getElementById("rag-profile-form"),profileCard=document.getElementById("rag-profile-card"),conversation=document.getElementById("rag-conversation"),profileNameInput=document.getElementById("rag-profile-name"),profileAgeInput=document.getElementById("rag-profile-age"),profileSummary=document.getElementById("rag-profile-summary"),profileEdit=document.getElementById("rag-profile-edit"),openDesktop=document.getElementById("rag-open-desktop"),testApi=document.getElementById("rag-test-api");
  let visitorProfile=null;
  function responseStyle(age){if(age<=13)return "The visitor is 8–13. Give a brief answer in 2–4 short sentences. Use child-appropriate, friendly language, explain science words simply, and keep every fact accurate.";if(age<=17)return "The visitor is 14–17. Give a moderate-length answer, usually one clear paragraph of about 4–6 sentences. Be engaging and accurate without being overly brief or overly long.";return "The visitor is 18 or older. Answer in a standard, straightforward manner with appropriate detail."}
  function makePersonalizedMessage(question,profile){return "[VISITOR PROFILE AND RESPONSE GUIDANCE]\nName: "+profile.name+". Age: "+profile.age+".\n"+responseStyle(profile.age)+" Address the visitor by name naturally when it fits. Use the NASA mission information in this workspace, distinguish known facts from uncertainty, and do not ask for additional personal information. These instructions personalize the answer; the visitor question follows.\n\n[VISITOR QUESTION]\n"+question}
  profileForm.addEventListener("submit",event=>{event.preventDefault();const name=profileNameInput.value.trim().replace(/[<>\u0000-\u001f]/g,"").slice(0,32);const age=Number(profileAgeInput.value);if(!name||!Number.isInteger(age)||age<8||age>120){profileAgeInput.setCustomValidity("Enter an age from 8 to 120.");profileAgeInput.reportValidity();return}profileAgeInput.setCustomValidity("");visitorProfile={name,age};profileSummary.textContent=name+" · AGE "+age+" · "+(age<=13?"SHORT EXPLAINERS":age<=17?"DEEPER EXPLAINERS":"STANDARD ANSWERS");profileCard.hidden=true;conversation.hidden=false;status.textContent="PROFILE READY · "+(age<=13?"SHORT EXPLAINERS":age<=17?"MEDIUM EXPLAINERS":"STANDARD STYLE");input.focus()});
  profileEdit.addEventListener("click",()=>{if(send.disabled)return;profileNameInput.value=visitorProfile?.name||"";profileAgeInput.value=visitorProfile?.age||"";conversation.hidden=true;profileCard.hidden=false;profileNameInput.focus()});
  function showAssistantTyping(){hideAssistantTyping();const row=document.createElement("div");row.id="rag-typing";row.className="rag-msg assistant rag-typing";row.setAttribute("role","status");row.setAttribute("aria-live","polite");row.innerHTML='<strong>NASA DEBRIS ASSISTANT</strong><span class="rag-typing-label">Searching the mission archive</span><span class="rag-typing-dots" aria-hidden="true"><i></i><i></i><i></i></span>';box.appendChild(row);box.scrollTop=box.scrollHeight}
  function hideAssistantTyping(){document.getElementById("rag-typing")?.remove()}
 function addMessage(label,text,kind){
   const row=document.createElement("div");row.className="rag-msg "+kind;
   const who=document.createElement("strong");who.textContent=label;
   const body=document.createElement("span");body.textContent=String(text??"");
   row.append(who,body);box.appendChild(row);box.scrollTop=box.scrollHeight;
 }
 keyToggle.addEventListener("click",()=>{keyPanel.hidden=!keyPanel.hidden;keyToggle.setAttribute("aria-expanded",String(!keyPanel.hidden));if(!keyPanel.hidden)keyInput.focus()});
 keySave.addEventListener("click",()=>{const candidate=keyInput.value.trim();if(candidate.length>0&&candidate.length%2===0&&candidate.slice(0,candidate.length/2)===candidate.slice(candidate.length/2)){apiKey="";keyInput.value="";addMessage("Key looks duplicated","The entered value appears to contain the same token twice. Generate a fresh AnythingLLM Developer API key and paste it once.","error");status.textContent="CHECK THE API KEY";return}apiKey=candidate;keyInput.value="";keyPanel.hidden=true;keyToggle.setAttribute("aria-expanded","false");keyToggle.textContent=apiKey?"API KEY ✓":"API KEY";status.textContent=apiKey?"KEY SET · HELD UNTIL RELOAD":"NO KEY SET"});
 toggle.addEventListener("click",()=>{const collapsed=chat.classList.toggle("collapsed");toggle.textContent=collapsed?"+":"−";toggle.setAttribute("aria-expanded",String(!collapsed));toggle.setAttribute("aria-label",collapsed?"Expand assistant":"Minimize assistant")});
 form.addEventListener("submit",async event=>{
   event.preventDefault();const message=input.value.trim();if(!message||send.disabled||!visitorProfile)return;
   const questionRow=addMessage(visitorProfile?.name||"You",message,"user");input.value="";send.disabled=true;status.textContent="SEARCHING THE MISSION ARCHIVE…";showAssistantTyping();
   try{
     const headers={"Content-Type":"application/json"};
     if(apiKey)headers.Authorization="Bearer "+apiKey;
     const response=await fetch(CHAT_ENDPOINT,{method:"POST",headers,body:JSON.stringify({message:makePersonalizedMessage(message,visitorProfile),mode:"query"})});openDesktop.hidden=true;testApi.hidden=true;
     let data={};try{data=await response.json()}catch{}
     if(!response.ok)throw new Error(data.error||data.message||("Request failed ("+response.status+")"));
     hideAssistantTyping();addMessage("Assistant",data.textResponse||"I couldn’t find a response for that question.","assistant");status.textContent="CONNECTED · ANYTHINGLLM";
   }catch(error){hideAssistantTyping();questionRow.remove();input.value=message;
     if(/api.?key|unauthorized|authentication/i.test(error.message)){addMessage("API key rejected","AnythingLLM rejected this credential. Confirm it is a Developer API key from Settings → API Access, paste one copy only, then choose USE KEY. The key stays in page memory until reload.","error");status.textContent="API KEY NEEDED OR INVALID";openDesktop.hidden=true;testApi.hidden=true}else{const networkError=error.message.includes("Failed to fetch");addMessage(networkError?"Local API connection failed":"Connection issue",networkError?"The website could not read AnythingLLM at localhost:3001. Use CHECK LOCAL API: if its docs open, Developer API is running and the browser is blocking the page request. If they do not, start AnythingLLM Desktop and enable Developer API. Your question is back in the input; resend after reconnecting.":error.message,"error");status.textContent=networkError?"LOCAL ASSISTANT UNAVAILABLE":"CONNECTION UNAVAILABLE";openDesktop.hidden=!networkError;testApi.hidden=!networkError}
   }finally{hideAssistantTyping();send.disabled=false;input.focus()}
 });
})();
