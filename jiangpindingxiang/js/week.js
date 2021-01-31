//法定
var flag = false;
$('#weekBtn').on('click', function () {
    console.log(11);
    flag = !flag
    if (flag) {
        $('#weekBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
        // $("#scaleBtn img").addClass('huanyuan')
        $('.weekRow').css({ 'position': 'relative', 'height': '500px' })
        $('.weekCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
        $('.weekCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
        // $('.weekCol .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
        $('.weekCol .areaList').css({ 'width': '25%', 'float': 'left' })
        $('.weekCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

    } else {
        $(".weekCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
        $('.weekCol').css({ 'position': 'static' })
        $('#weekBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
        $('.weekCol .areaList').css({ 'width': '100%', 'float': 'none' })
        $('.weekCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
        // $('.weekCol .areaContent').css({'display':'block'})
    }

})
$(function () {
    layui.use(['layer', 'form'], function () {
        form = layui.form;
        form.render()
        var week=[
            {
                parentId: 34,
                id: 52,
                label: '星期一'
            },
            {
                parentId: 34,
                id: 53,
                label: '星期二'
            }
        ]
        weekData(week)
     function weekData(week){
         var str=""
       week.forEach(item=> {
        var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
        str += `
        <div class="areaList first" week_id="${item.id}" data_item="${tempJsonStr}">
        <p class="areaName areaNames">${item.label}</p>
            <div class='checkboxs'>
                <form class="layui-form area-form" action="" >
                    <div class="area-checkbox" > 
                        <input lay-filter="week"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                        <div class="area-img"></div>
                    </div>
            </form>
            </div>
        </div>`
       });
       $("#weekList").html(str)
       form.render()
     }
//星期筛选
weekChange()
function weekChange(){
    // weekData(week)
    $("#weekSearch").on("input",function(){
        let str=""
      let weekArr=[]
      let keyWord=$("#weekSearch").val()
      week.forEach(item=>{
          let weekitem=item.label
          if(weekitem.indexOf( keyWord)>-1){
            weekArr.push(item)
          }
         
      })
      weekData(weekArr)
      form.render()
    })
}
//星期选中的checkbox
   function weekChecked(form){
       let chknum=$("#weekList .areaList ").find("input[type='checkbox']:checked").length
       let inputCheck=$("#weekList .areaList ").find("input[type='checkbox']").length
       if(chknum == inputCheck && chknum>0){
           $("#weekAll").find("input[type='checkbox']").prop("checked",true)
       }else{
        $("#weekAll").find("input[type='checkbox']").prop("checked",false) 
       }
       form.render()
   }
   //星期选中
   $("#weekList").on("click",".areaName",function(){
       if($(this).hasClass("cur")){
        $(this).removeClass("cur") 
       }else{
        $(this).addClass("cur") 
       }
   })
   //星期-点击checkbox
   $("#weekList .checkboxs").on("click",function(){
       if(!$(this).find("input[type='checkbox']").prop("checked")){
        $(this).find("input[type='checkbox']").prop("checked",false)
       }else{
        $(this).find("input[type='checkbox']").prop("checked",true)
       }
       weekChecked(form)
   })
    })
})