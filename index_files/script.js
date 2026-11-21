/* CHỈNH NỘI DUNG TRUYỆN Ở MẢNG STORY BÊN DƯỚI.
   Các loại: narration, dialogue, image, sound, choices, divider.
   Đây là truyện minh họa, không phải nội dung chính thức của game. */
const STORY = [

  {type:'choices',options:[
    {label:'Giành lại được quyền kiểm soát',
      result:[
        {type:'narration',text:'Chỉ trong khoảnh khắc, một cơn đau dữ dội như xé toạc từng thớ thịt ập đến, khiến toàn thân tôi gần như tê liệt.'},
        {type:'narration',text:'Rồi đột ngột, tất cả chấm dứt. Sự khống chế của Intelligencore cuối cùng cũng hoàn toàn biến mất.'},
        {type:'narration',text:'Theo đà lao tới, tôi phóng đến bên cạnh Sylus. Không hề hay biết những gì vừa xảy ra sau lưng, anh quay sang nhìn tôi. Ánh mắt chúng tôi chạm nhau. Trên gương mặt Sylus vẫn là nụ cười đầy tự tin quen thuộc.'},
        {type:'dialogue',speaker:'Sylus',character:'Sylus',text:'Vì tự do của chúng ta, và vì cuộc đời mới của em.'},
        {type:'narration',text:'Chúng tôi cùng lao về phía cỗ máy khổng lồ sừng sững giữa căn phòng. Mảnh kim loại sắc nhọn mà Intelligencore vừa ép tôi cầm lấy, giờ đây lại trở thành thứ vũ khí vừa vặn trong tay. Cùng lúc ấy, luồng năng lượng từ Evol của Sylus bùng lên dữ dội, giáng thẳng vào trụ lõi của cỗ máy.'},
        {type:'narration',text:'ẦM!!'},
        {type:'narration',text:'Những tia lửa điện tóe lên dữ dội sau mỗi đòn tấn công. Các luồng xung điện bùng phát, lan khắp căn phòng, trước khi trụ lõi vỡ tung trong một tiếng nổ kinh hoàng. Ngọn lửa lập tức bốc cao, cuồn cuộn nuốt chửng khu vực trung tâm Tháp Chỉ Lệnh.'},
        {type:'narration',text:'Giữa biển lửa đang lan rộng, Sylus bất ngờ nắm lấy tay tôi, kéo mạnh về phía mình rồi thuận thế bế bổng tôi lên. Tôi vội choàng tay qua cổ, ôm chặt lấy anh.'},      
        {type:'narration',text:'Sylus cúi xuống nhìn tôi. Ánh mắt anh dịu dàng đến lạ, khiến những đường nét vốn sắc lạnh trên gương mặt cũng trở nên mềm mại hơn.'},
        {type:'dialogue',speaker:'Sylus',character:'Sylus',text:'Sẽ không còn xiềng xích nào nữa. Không bao giờ nữa.'},
        {type:'dialogue',speaker:'MC',character:'mc',text:'Sylus... Chúng ta thắng rồi...'},
        {type:'narration',text:'Tôi khẽ run rẩy, đưa hai tay nâng niu gương mặt anh, nơi vẫn còn vương những vệt dung dịch xanh.'},
        {type:'dialogue',speaker:'Sylus',character:'Sylus',text:'Em khóc đấy à? Em sợ sao?'},
        {type:'dialogue',speaker:'MC',character:'mc',text:'...Em vui mà!'},
        {type:'narration',text:'Tôi chống chế. Sylus bật cười khẽ.'},
        {type:'dialogue',speaker:'Sylus',character:'Sylus',text:'Đi thôi. Chúng ta sẽ cùng nhau rời khỏi đây.'},
        {type:'narration',text:'Cứ thế, Sylus bế tôi trên tay, ung dung rời khỏi chiến trường vừa trải qua những khoảnh khắc sinh tử, nơi cả hai đã cùng nhau chiến đấu, cùng nhau vượt qua ranh giới mong manh giữa sự sống và cái chết.'},
        {type:'narration',text:'(Tiếp tục tới Chương 5 - New Life Save)'},
      ]},
    {label:'Thất bại',
      result:[
        {type:'narration',text:'Tiếng bước chân tôi dồn dập hơn khi khoảng cách giữa hai người dần thu hẹp. Như linh cảm được mối nguy hiểm đang áp sát từ phía sau, Sylus bất ngờ xoay người, vừa kịp tránh lưỡi kim loại sắc lạnh đang nhắm thẳng vào mình.'},
        {type:'narration',text:'Chỉ trong tích tắc, bàn tay anh đã siết chặt lấy cổ tay tôi, chặn đứng đòn tấn công.'},
        {type:'narration',text:'Nhưng…'},
        {type:'narration',text:'Xoẹt!'},
        {type:'narration',text:'Một sức mạnh vô hình bất ngờ ép toàn thân tôi lao mạnh về phía trước.'},
        {type:'narration',text:'Lưỡi kim loại cắm phập vào ngực Sylus.'},
        {type:'narration',text:'Đôi mắt anh mở lớn. Trong thoáng chốc, vẻ kinh ngạc hiện rõ trên gương mặt người tôi thương, trước khi cơn đau ập đến khiến đôi mày anh nhíu chặt. Hơi thở trở nên nặng nhọc, Sylus loạng choạng rồi khuỵu xuống. Bàn tay vốn đang siết lấy cổ tay tôi cũng dần buông lỏng, cuối cùng bất lực trượt khỏi.'},
        {type:'narration',text:'Như thể đã đạt được mục đích, Intelligencore dường như đang dần từ bỏ quyền kiểm soát cơ thể tôi.'},
        {type:'narration',text:'Tôi hoảng loạn quỳ xuống bên anh.'},
        {type:'narration',text:'Từ vết thương trên ngực Sylus, những tia điện nhỏ liên tục lóe lên giữa dòng dung dịch xanh đang rỉ ra, nhỏ từng giọt xuống nền nhà. Anh nghiến răng, dứt khoát rút mạnh mảnh kim loại khỏi lồng ngực. Ngay khi lưỡi sắc được kéo ra, thứ chất lỏng màu xanh ấy lại trào ra nhiều hơn, chảy dài theo vết thương.'},
        {type:'dialogue',speaker:'Sylus',character:'Sylus',text:'...'},
        {type:'narration',text:'Đôi tay tôi run rẩy không ngừng, nỗi hoảng loạn bóp nghẹt từng hơi thở. Cảm giác tội lỗi như một vực sâu không đáy, kéo tôi chìm dần vào bóng tối. Vô số suy nghĩ hỗn loạn xoáy cuộn trong tâm trí, chồng chéo lên nhau, nhưng chẳng một ý nghĩ nào có thể giúp tôi tìm ra cách cứu anh.'},
        {type:'narration',text:'Thật nực cười.'},
        {type:'narration',text:'Tôi từng là người chỉ huy của Mysteriano, từng được công nhận là một trong những bộ óc xuất sắc nhất sau khi vượt qua những đợt huấn luyện khắc nghiệt của Hội đồng Quản trị. Vậy mà giờ đây, tất cả kiến thức, năng lực và sự tỉnh táo mà tôi từng tự hào lại trở nên vô nghĩa.'},
        {type:'narration',text:'Tôi hoàn toàn bất lực trước một câu hỏi tưởng chừng đơn giản: Làm thế nào để cứu sống android này? Một cỗ máy mà trong mắt những người đã đào tạo tôi, sự tồn tại chỉ là một lỗi hệ thống cần được loại bỏ.'},
        {type:'dialogue',speaker:'MC',character:'mc',text:'Không... Đừng bắt em phải làm chuyện này...'},
        {type:'narration',text:'Tôi cố giữ chặt đôi tay đang run rẩy, nhưng chẳng thể nào trấn tĩnh được bản thân. Sylus nhẹ nhàng nắm lấy một bàn tay tôi, đưa lên áp vào vết thương trên ngực anh.'},
        {type:'narration',text:'Anh nhìn thẳng vào mắt tôi, ánh nhìn dịu dàng như muốn xoa dịu nỗi tuyệt vọng đang dâng đầy trong đáy mắt.'},
        {type:'dialogue',speaker:'Sylus',character:'Sylus',text:'Không phải lỗi của em.'},
        {type:'narration',text:'Anh khẽ tựa trán mình vào trán tôi. Những đầu ngón tay kim loại dịu dàng lướt trên má, như muốn vỗ về, trấn an tôi. Sau đó, Sylus chậm rãi gượng đứng dậy. Suốt khoảnh khắc ấy, ánh mắt anh vẫn không rời khỏi tôi.'},
        {type:'narration',text:'Bíp! Bíp! Bíp! Bíp—!'},
        {type:'dialogue',speaker:'Intelligencore',character:'Intelligencore',text:'Quyền điều khiển cưỡng chế đã bị vô hiệu hóa.'},
        {type:'narration',text:'Sylus chậm rãi quay lưng, hướng về phía lõi điều khiển.'},
        {type:'narration',text:'Tôi lờ mờ nhận ra điều anh đang định làm, nhưng lại hoàn toàn bất lực, chẳng thể cất lời ngăn cản, cũng không đủ sức giữ anh ở lại.'},
        {type:'narration',text:'Tiếng cười trầm khàn, pha lẫn chút chua chát của anh bất chợt vang lên, vọng khắp căn phòng.'},
        {type:'narration',text:'Rồi Sylus ngoảnh đầu, nhìn tôi lần cuối. Ngay khoảnh khắc ấy, lõi Evol trong lồng ngực anh bừng sáng, tỏa ra quầng hào quang, nhuộm ánh đỏ lên những đường nét quen thuộc trên gương mặt anh.'},
        {type:'dialogue',speaker:'Sylus',character:'Sylus',text:'Kết cục của mình, ta sẽ tự quyết định.'},
        {type:'narration',text:'Cơ thể tôi bị evol của Sylus nhấc bổng lên, chậm rãi đẩy lùi về phía cửa phòng điều khiển.'},
        {type:'narration',text:'Qua khoảng cách ngày một xa, tôi chỉ biết bất lực dõi theo bóng lưng cao lớn của Sylus khi anh từng bước tiến đến gần trụ lõi.'},
        {type:'narration',text:'ẦM!!!'},
        {type:'narration',text:'Ngay khi vụ nổ bùng phát, cánh cửa phòng điều khiển cũng vừa kịp khép chặt, ngăn cách tôi với những luồng xung kích dữ dội đang cuộn trào bên trong.'}

      ]},
  ]},
  
  
];
const root=document.getElementById('story');
function el(tag,cls,content){const node=document.createElement(tag);if(cls)node.className=cls;if(content!==undefined)node.textContent=content;return node}
function notifyHeight(){requestAnimationFrame(()=>window.parent.postMessage({type:'STORY_HEIGHT',height:Math.ceil(document.documentElement.scrollHeight)},'*'))}
function 
renderBlock(block){const wrap=el('section','block');switch(block.type){
case 'narration':wrap.append(el('div','narration'+(block.highlight?' highlight':''),block.text));break;
case 'dialogue': {
    const character = String(block.character || '').toLowerCase();
    const kind = ['sylus', 'mc'].includes(character)
        ? character
        : 'other';

    const c = el('div', 'character ' + kind);

    const speaker = el('div', 'speaker', block.speaker);

    const row = el('div', 'dialogue-row');

    const avatar = el('img', 'avatar');
    avatar.src = kind === 'sylus'
        ? 'assets/sylus-avatar.png'
        : 'assets/mc-avatar.png';

    avatar.alt = block.speaker;
    avatar.addEventListener('load', notifyHeight);

    const dialogue = el('div', 'dialogue', block.text);

    if (kind === 'mc') {
        row.append(dialogue, avatar);
    } else {
        row.append(avatar, dialogue);
    }

    c.append(speaker, row);
    wrap.append(c);
    break;
}
case 'image':{const img=el('img','story-image');img.src=block.src;img.alt=block.alt||'Hình minh họa';img.loading='lazy';img.addEventListener('load',notifyHeight);wrap.append(img);break}
case 'sound':wrap.append(el('div','sound'+(block.effect?' effect':''),block.text));break;
case 'divider':wrap.append(el('div','divider'));break;
case 'choices':{const choices=el('div','choices'),result=el('div','choice-result');(block.options||[]).forEach(option=>{const btn=el('button','choice',option.label);btn.type='button';btn.addEventListener('click',()=>{choices.querySelectorAll('button').forEach(b=>{b.classList.remove('selected');b.setAttribute('aria-pressed','false')});btn.classList.add('selected');btn.setAttribute('aria-pressed','true');result.replaceChildren(...(option.result||[]).map(renderBlock));notifyHeight()});btn.setAttribute('aria-pressed','false');choices.append(btn)});wrap.append(choices,result);break}
}return wrap}
root.append(...STORY.map(renderBlock));

