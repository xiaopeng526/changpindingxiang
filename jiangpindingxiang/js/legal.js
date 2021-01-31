//法定
var flag = false;
$('#legalBtn').on('click', function () {
    console.log(11);
    flag = !flag
    if (flag) {
        $('#legalBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
        // $("#scaleBtn img").addClass('huanyuan')
        $('.legalCol').css({ 'position': 'relative', 'height': '500px' })
        $('.legalBtnCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
        $('.legalBtnCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
        // $('.legalBtnCol .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
        $('.legalBtnCol .areaList').css({ 'width': '25%', 'float': 'left' })
        $('.legalBtnCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

    } else {
        $(".legalBtnCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
        $('.legalBtnCol').css({ 'position': 'static' })
        $('#legalBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
        $('.legalBtnCol .areaList').css({ 'width': '100%', 'float': 'none' })
        $('.legalBtnCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
        // $('.legalBtnCol .areaContent').css({'display':'block'})
    }

})

$(function () {
    layui.use(['layer', 'form'], function () {
        form = layui.form;
        form.render()
        var legal = [
            {
                parentId: 34,
                id: 49,
                label: '微信'
            },
            {
                parentId: 36,
                id: 50,
                label: '支付宝'
            },
            {
                parentId: 38,
                id: 51,
                label: '其他'
            }
        ]
        legalData(legal)
        function legalData(legal) {
            var str = ""
            legal.forEach(item => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str += `
                <div class="areaList first"  data_item="${tempJsonStr}">
                <p class="areaName areaNames">${item.label}</p>
                    <div class='checkboxs'>
                        <form class="layui-form area-form" action="" >
                            <div class="area-checkbox" > 
                                <input lay-filter="scanFirst"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                <div class="area-img"></div>
                            </div>
                    </form>
                    </div>
                </div>`
            });

            $("#legalList").html(str)
            form.render()
        }
        //筛选
        legalChange()
        function legalChange() {
            $("#legalSearchs").on("input", function () {
                let legalArr = []
                let str = ""
                let keyWord = $("#legalSearchs").val()
                legal.forEach(item => {
                    let legalArrItem = item.label
                    if (legalArrItem.indexOf(keyWord) > -1) {
                        legalArr.push(item)
                    }
                })
                legalData(legalArr)
                form.render()
            })
        }
        //自定义-1级全选
        $("#legalAlls").on("click", function () {
            legalsAll()
            form.render()
        })
        //法定全选
        function legalsAll() {

            let legalAll = $("#legalAlls").find("input[type='checkbox']").prop("checked")
            $("#legalList .areaList").each(function () {

                $(this).find("input[type='checkbox']").prop("checked", legalAll)

            })
            legalChecked(form)
            form.render()
        }
        //法定选中的checkbox
        function legalChecked(form) {

            let chknum = $("#legalList .areaList").find("input[type='checkbox']:checked").length;
            let inputCheck = $("#legalList .areaList").find("input[type='checkbox']").length
            if (chknum == inputCheck && chknum > 0) {
                $("#legalAlls").find("input[type='checkbox']").prop("checked", true)
            } else {
                $("#legalAlls").find("input[type='checkbox']").prop("checked", false)
            }
            form.render();
        }

        //法定选中
        $("#legalList").on("click", ".areaName", function () {
            if ($(this).hasClass("cur")) {
                $(this).removeClass("cur")
                //  $(this).find("input[type='checkbox']").prop("checked",false)
            } else {
                $(this).addClass("cur")
            }
        })
        //法定---点击checkbox
        $("#legalList .checkboxs").on("click",function(){
            console.log("legalList");
            if(!$(this).find("input[type='checkbox']").prop("checked")){
                $(this).find("input[type='checkbox']").prop("checked",false)
            }else{
                $(this).find("input[type='checkbox']").prop("checked",true) 
            }
            legalChecked(form)
        })
    })


})