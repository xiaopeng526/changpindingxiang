//设备自定义-1级
var flag = false;
$('#equipmentBtn').on('click', function () {
    console.log(11);
    flag = !flag
    if (flag) {
        $('#equipmentBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
        // $("#scaleBtn img").addClass('huanyuan')
        $('.equipmentRow ').css({ 'position': 'relative', 'height': '500px' })
        $('.equipmentCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
        $('.equipmentCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
        // $('.equipmentCol .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
        $('.equipmentCol .areaList').css({ 'width': '25%', 'float': 'left' })
        $('.equipmentCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

    } else {
        $(".equipmentCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
        $('.equipmentCol').css({ 'position': 'static' })
        $('#equipmentBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
        $('.equipmentCol .areaList').css({ 'width': '100%', 'float': 'none' })
        $('.equipmentCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
        // $('.equipmentCol .areaContent').css({'display':'block'})
    }

})
//设备自定义-2级
var flag = false;
$('#equipmentSecondBtn').on('click', function () {
    console.log(11);
    flag = !flag
    if (flag) {
        $('#equipmentSecondBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
        // $("#scaleBtn img").addClass('huanyuan')
        $('.equipmentRow ').css({ 'position': 'relative', 'height': '500px' })
        $('.equipmentSecondCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
        $('.equipmentSecondCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
        // $('.equipmentSecondCol .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
        $('.equipmentSecondCol .areaList').css({ 'width': '25%', 'float': 'left' })
        $('.equipmentSecondCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

    } else {
        $(".equipmentSecondCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
        $('.equipmentSecondCol').css({ 'position': 'static' })
        $('#equipmentSecondBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
        $('.equipmentSecondCol .areaList').css({ 'width': '100%', 'float': 'none' })
        $('.equipmentSecondCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
        // $('.equipmentCol .areaContent').css({'display':'block'})
    }

})

$(function () {
    layui.use(['layer', 'form'], function () {
        form = layui.form;
        form.render()
        var equipmentFirst=[
            {
                parentId: 34,
                id: 54,
                label: 'IOS'
            },
            {
                parentId: 34,
                id: 56,
                label: '安卓'
            } 
        ]
        var equipmentSecond=[
            {
                parentId: 54,
                id: 58,
                label: 'android(Q)'
            },
            {
                parentId: 54,
                id: 59,
                label: 'android 9.0(pie)'
            } 
        ]
        var equipmentSecond2=[
            {
                parentId: 56,
                id: 60,
                label: 'android(Q1)'
            },
            {
                parentId: 56,
                id: 61,
                label: 'android 8.0(pie)'
            }  
        ]
           //数组对象去重
           function processConmon(arr,key) {
            // 缓存用于记录
            const cache = [];
            for (const t of arr) {
                // 检查缓存中是否已经存在
                if (cache.find(c => c[key] === t[key])) {
                    // 已经存在说明以前记录过，现在这个就是多余的，直接忽略
                    continue;
                }
                // 不存在就说明以前没遇到过，把它记录下来
                cache.push(t);
            }

            // 记录结果就是过滤后的结果
            return cache;
        }
        equipmentData(equipmentFirst)
        function equipmentData(equipmentFirst){
             var str=""
             equipmentFirst.forEach(item => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str += `
                <div class="areaList first" equipment_id="${item.id}" data_item="${tempJsonStr}">
                <p class="areaName areaNames">${item.label}</p>
                    <div class='checkboxs'>
                        <form class="layui-form area-form" action="" >
                            <div class="area-checkbox" > 
                                <input lay-filter="equipmentFirst"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                <div class="area-img"></div>
                            </div>
                    </form>
                    </div>
                </div>`
             });  
             $("#equipmentFirstList").html(str)
             form.render()
        }
        function equipmentSecondData( equipmentSecond){
            var str2=""
            equipmentSecond.forEach(item => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
               str2 += `
               <div class="areaList first" equipmentSec_id="${item.id}" equipmentParentId="${item.parentId}" data_item="${tempJsonStr}">
               <p class="areaName areaNames">${item.label}</p>
                   <div class='checkboxs'>
                       <form class="layui-form area-form" action="" >
                           <div class="area-checkbox" > 
                               <input lay-filter="equipmentSecond"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                               <div class="area-img"></div>
                           </div>
                   </form>
                   </div>
               </div>`
            })
            $("#equipmentSecondList").html(str2)
        }
        var arr=[]
        //设备自定义选中与清空
           $("#equipmentFirstList ").on("click",".areaName",function(){
            let equipmentFirstId=$(this).parent().attr("equipment_id")
              if($(this).hasClass("cur")){
                $(this).removeClass("cur")
                let transtionArr=arr.filter(item=>equipmentFirstId == item.parentId)
                arr=arr.filter(item=> !transtionArr.some(el=>el.id == item.id))
                equipmentSecondData(arr) 
                form.render()
              }else{
                $(this).addClass("cur")  
                if($(this).parent().index()>0){
                   arr=arr.concat(equipmentSecond2)
                }else{
                    arr=arr.concat(equipmentSecond)
                }
                 arr=processConmon(arr,'label')
                equipmentSecondData(arr) 

                localStorage.setItem('equipmentFirstData', JSON.stringify(arr))
                $("#equipmentFirstList .areaList").find(".area-img").removeClass("is-indeterminate")
                var that=this
                getcheckedDom(that,equipmentFirstId,"#equipmentSecondList","equipmentParentId")
              
                form.render()
              }
              equipmentFirstChecked(form)
              equipmentSecondChecked(form)
           })
        //设备自定义-1级筛选
        equipmentFirstChange()
        function equipmentFirstChange(){
          
            $("#equipmentFirstSearch").on("input",function(){
                let equipmentFirstArr=[]
                let keyWord=$("#equipmentFirstSearch").val()
                equipmentFirst.forEach(item=>{
                    let  equipmentFirstitem=item.label
                    if(equipmentFirstitem.indexOf(keyWord)>-1){
                        equipmentFirstArr.push(item) 
                    }
                })
                equipmentData(equipmentFirstArr)
                form.render()
            })
        }
        //设备自定义-2级筛选
        equipmentSecondSearch()
        function equipmentSecondSearch(){
            let equipmentFirstData = localStorage.getItem('equipmentFirstData')
            let equipmentFirstDataArr = JSON.parse(equipmentFirstData)
            $("#equipmentSecondSearch").on("input",function(){
                let equipmentFirstArr=[]
                let keyWord=$("#equipmentSecondSearch").val()
                equipmentFirstDataArr.forEach(item=>{
                    let  equipmentFirstitem=item.label
                    if(equipmentFirstitem.indexOf(keyWord)>-1){
                        equipmentFirstArr.push(item) 
                    }
                })
                equipmentSecondData(equipmentFirstArr)
                form.render()
            })
        }
        //设备自定义-1级选中的checkbox
        function equipmentFirstChecked(form){
            let chknum=$("#equipmentFirstList .areaList").find("input[type='checkbox']:checked").length
            let inputCheck=$("#equipmentFirstList .areaList").find("input[type='checkbox']").length
            if(chknum == inputCheck){
                $("#equipmentFirstAll").find("input[type='checkbox']").prop("checked",true)
            }else{
                $("#equipmentFirstAll").find("input[type='checkbox']").prop("checked",false) 
            }
            form.render()
        }
        //设备自定义-2级选中的checkbox
        function equipmentSecondChecked(form){
            let chknum2=$("#equipmentSecondList .areaList").find("input[type='checkbox']:checked").length
            let inputCheck2=$("#equipmentSecondList .areaList").find("input[type='checkbox']").length
            if(chknum2 == inputCheck2 && chknum2>0){
                $("#equipmentSecondAll").find("input[type='checkbox']").prop("checked",true)
            }else{
                $("#equipmentSecondAll").find("input[type='checkbox']").prop("checked",false) 
            }
            form.render()
        }
        //设备自定义-1级点击checkbox
        $("#equipmentFirstList .checkboxs").on("click",function(){
            let equipmentCheckedId=$(this).parent().attr("equipment_id")
            if($(this).find(".area-img").hasClass("is-indeterminate")){
                $(this).find(".area-img").removeClass("is-indeterminate")
                $(this).find("input[type='checkbox']").prop("checked",true)
                $("#equipmentSecondList .areaList").each(function(){
                    if(equipmentCheckedId == $(this).attr("equipmentParentId")){
                        $(this).find("input[type='checkbox']").prop("checked",true)
                    }

                })
                form.render()
            }else{
                if(!$(this).find("input[type='checkbox']").prop("checked")){
                    $(this).find("input[type='checkbox']").prop("checked",false)
                    $("#equipmentSecondList .areaList").each(function(){
                        if(equipmentCheckedId == $(this).attr("equipmentParentId")){
                            $(this).find("input[type='checkbox']").prop("checked",false)
                        }
    
                    })
                }else{
                    $(this).find("input[type='checkbox']").prop("checked",true)
                    $("#equipmentSecondList .areaList").each(function(){
                        if(equipmentCheckedId == $(this).attr("equipmentParentId")){
                            $(this).find("input[type='checkbox']").prop("checked",true)
                        }
    
                    })
                }
            }
            equipmentFirstChecked(form)
            equipmentSecondChecked(form)
        })
        //设备自定义-2级点击checkbox
        $(document).on("click","#equipmentSecondList .checkboxs",function(){
            console.log("equipmentSecondList-checkboxs");
            let equipmentsecondCheckedId=$(this).parent().attr("equipmentParentId")
                let equipmentsecondid=`#equipmentSecondList .areaList[equipmentParentId='${equipmentsecondCheckedId}']`
                let equipmentsecondids=$(equipmentsecondid).find("input[type='checkbox']:checked").length
                $("#equipmentFirstList .areaList").each(function(){
                    if(equipmentsecondCheckedId == $(this).attr("equipment_id")){
                        if( equipmentsecondids == $(equipmentsecondid).length){
                            $(this).find("input[type='checkbox']").prop("checked",true)
                            $(this).find(".area-img").removeClass("is-indeterminate")
                        }else if(equipmentsecondids>0 && equipmentsecondids<$(equipmentsecondid).length){
                            $(this).find("input[type='checkbox']").prop("checked",false)
                            $(this).find(".area-img").addClass("is-indeterminate")
                        }else{
                            $(this).find("input[type='checkbox']").prop("checked",false)
                            $(this).find(".area-img").removeClass("is-indeterminate")
                        }
                        
                    }

                })
                equipmentFirstChecked(form)
                equipmentSecondChecked(form)   
                form.render()            
            
        })
        //设备自定义-1级全选
        $("#equipmentFirstAll").on("click",function(){
            equipmentFirstAlls()
            form.render()
        })
        function equipmentFirstAlls(){
            $("#equipmentFirstList .areaList").find(".area-img").removeClass("is-indeterminate")  
            $("#equipmentSecondList .areaList").find(".area-img").removeClass("is-indeterminate") 
            let equipmentFirstsAll=$("#equipmentFirstAll").find("input[type='checkbox']").prop("checked")
            $("#equipmentFirstList .areaList").each(function(){
                let equipmentsid=$(this).attr("equipment_id")
                $(this).find("input[type='checkbox']").prop("checked",equipmentFirstsAll)
                $("#equipmentSecondList .areaList").each(function(){
                 if(equipmentsid == $(this).attr("equipmentParentId")){
                    $(this).find("input[type='checkbox']").prop("checked",equipmentFirstsAll) 
                 }
                })
            })
            equipmentFirstChecked(form)
            equipmentSecondChecked(form)
            form.render()  
        }
        //设备自定义-2级全选
        $("#equipmentSecondAll").on("click",function(){
            equipmentSecondAlls()
            form.render()
        })
        function equipmentSecondAlls(){
            console.log("equipmentSecondAll");
            $("#equipmentFirstList .areaList").find(".area-img").removeClass("is-indeterminate")  
            $("#equipmentSecondList .areaList").find(".area-img").removeClass("is-indeterminate") 
            let equipmentSecondsAll=$("#equipmentSecondAll").find("input[type='checkbox']").prop("checked")
            $("#equipmentSecondList .areaList").each(function(){
                console.log("equipmentSecondAll2");
                let equipSecondmentid=$(this).attr("equipmentParentId")
                $(this).find("input[type='checkbox']").prop("checked",equipmentSecondsAll)
                $("#equipmentFirstList .areaList").each(function(){
                    console.log("equipmentSecondAll6");
                    if( equipSecondmentid== $(this).attr("equipment_id")){
                        $(this).find("input[type='checkbox']").prop("checked",equipmentSecondsAll) 
                    }
                })
            })
            equipmentFirstChecked(form)
            equipmentSecondChecked(form)
            form.render()  
        }
           //未选中框架前checkbox
           function getcheckedDom(that, Id, nodeDom, nodeId) {
            console.log(that, Id, nodeDom)
            if (!$(that).parent().find("input[type='checkbox']").prop('checked')) {
                $(that).parent().find("input[type='checkbox']").prop('checked', false)
                $(nodeDom + '>.areaList').each(function (index, item) {
                    if (Id == $(this).attr(nodeId)) {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        form.render(); //渲染页面
                    }
                })
            } else {//选中
                $(that).parent().find("input[type='checkbox']").prop('checked', true)
                $(nodeDom + '>.areaList').each(function (index, item) {
                    if (Id == $(this).attr(nodeId)) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        form.render(); //渲染页面
                    }
                })
            }
        }
    })
})
