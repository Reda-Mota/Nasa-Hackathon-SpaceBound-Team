// Adds animated SVG layers to cards and modal scenes
function addStoryMotion(container,id,cardMode=false){
 const s=stories.find(item=>item.id===id);if(!s||!container)return;
 const ns='http://www.w3.org/2000/svg',wide=!cardMode,svg=document.createElementNS(ns,'svg');
 svg.setAttribute('viewBox',wide?'0 0 1600 700':'0 0 320 150');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.classList.add('story-art-motion');
 const el=(name,attrs={},cls='')=>{const n=document.createElementNS(ns,name);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,String(v)));if(cls)n.setAttribute('class',cls);svg.appendChild(n);return n};
 const cx=wide?800:210,cy=wide?488:94;
 [0,1].forEach(i=>el('circle',{cx,cy,r:wide?58+i*24:21+i*14},'motion-signal'+(i?' delay':'')));
 el('path',{d:wide?'M120 600 Q420 540 710 582 T1260 570 T1510 594':'M8 129 Q72 112 145 125 T300 123'},'motion-track');
 const stars=cardMode?[[36,26],[91,48],[272,28],[180,18],[297,67]]:[[118,148],[358,245],[1340,158],[1442,310],[1012,120],[520,112]];
 stars.forEach((p,i)=>el('circle',{cx:p[0],cy:p[1],r:i===2?3:2},'motion-glint'+(i%3===1?' g2':i%3===2?' g3':'')));
 if(s.world==='Beyond'){
   const orbit=el('ellipse',{cx:cardMode?236:1215,cy:cardMode?82:545,rx:cardMode?54:300,ry:cardMode?20:58,transform:cardMode?'rotate(-18 236 82)':'rotate(-18 1215 545)'},'motion-orbit');
   const group=document.createElementNS(ns,'g');group.setAttribute('transform','translate('+(cardMode?236:1215)+' '+(cardMode?82:545)+')');group.classList.add('motion-orbit-spin');group.style.transformOrigin=(cardMode?'236px 82px':'1215px 545px');
   const dot=document.createElementNS(ns,'circle');dot.setAttribute('cx',cardMode?'54':'300');dot.setAttribute('cy','0');dot.setAttribute('r',cardMode?'3':'7');dot.setAttribute('class','motion-orbit-dot');group.appendChild(dot);svg.appendChild(group);
   const craft=el('g',{transform:cardMode?'translate(120 102) scale(.34)':'translate(620 405) scale(1)'},'motion-craft');
   const craftBody=document.createElementNS(ns,'path');craftBody.setAttribute('d','M-42 -24 L0 -48 L42 -24 L42 24 L0 48 L-42 24 Z');craftBody.setAttribute('fill','#c2a36a');craftBody.setAttribute('stroke','#f0d994');craftBody.setAttribute('stroke-width','3');craft.appendChild(craftBody);
   const panel=document.createElementNS(ns,'path');panel.setAttribute('d','M-42 -13 H-112 V13 H-42 M42 -13 H112 V13 H42');panel.setAttribute('fill','#163457');panel.setAttribute('stroke','#8fc7ff');panel.setAttribute('stroke-width','3');craft.appendChild(panel);
 }else if(s.id==='ingenuity'){
   const fly=el('g',{transform:cardMode?'translate(120 91) scale(.45)':'translate(1040 440)'},'motion-craft');
   const legs=document.createElementNS(ns,'path');legs.setAttribute('d','M0 0 L-20 23 M0 0 L20 23 M-23 23 H23');legs.setAttribute('stroke','#e6d7b2');legs.setAttribute('stroke-width','4');fly.appendChild(legs);
   const body=document.createElementNS(ns,'rect');body.setAttribute('x','-12');body.setAttribute('y','-9');body.setAttribute('width','24');body.setAttribute('height','18');body.setAttribute('rx','4');body.setAttribute('fill','#d2b16d');fly.appendChild(body);
   const mast=document.createElementNS(ns,'path');mast.setAttribute('d','M0 -9 V-34');mast.setAttribute('stroke','#e6d7b2');mast.setAttribute('stroke-width','3');fly.appendChild(mast);
   const rotor=document.createElementNS(ns,'path');rotor.setAttribute('d','M-46 -36 H46');rotor.setAttribute('stroke','#c6dcf0');rotor.setAttribute('stroke-width','3');rotor.setAttribute('class','motion-rotor');fly.appendChild(rotor);
 }else if(s.world==='Mars'){
   const hill=el('path',{d:cardMode?'M0 111 Q64 82 125 108 T320 97':'M0 510 Q240 435 470 495 T930 465 T1600 480'},'motion-stroke');
   for(let i=0;i<3;i++)el('circle',{cx:(cardMode?44:290)+i*(cardMode?12:34),cy:(cardMode?104:556)-i*2,r:cardMode?2.5:5},'motion-dust');
 }else{
   for(let i=0;i<4;i++)el('circle',{cx:(cardMode?54:480)+i*(cardMode?24:62),cy:(cardMode?105:572)-i*6,r:cardMode?2:4},'motion-dust');
 }
 container.appendChild(svg);
}
