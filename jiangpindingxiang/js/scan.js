//区域的展开
var flag = false;
$('#scanFirst').on('click', function () {
    flag = !flag
    if (flag) {
        $('#scanFirst img').attr('src', './jiangpindingxiang/images/huanyuan.png')
        // $("#scaleBtn img").addClass('huanyuan')
        $('.rowCol').css({ 'position': 'relative', 'height': '500px' })
        $('.scanFirstCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
        $('.scanFirstCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
        // $('.scanFirstCol .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
        $('.scanFirstCol .areaList').css({ 'width': '25%', 'float': 'left' })
        $('.scanFirstCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

    } else {
        $(".scanFirstCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
        $('.scanFirstCol').css({ 'position': 'static' })
        $('#scanFirst img').attr('src', './jiangpindingxiang/images/zoom.png')
        $('.scanFirstCol .areaList').css({ 'width': '100%', 'float': 'none' })
        $('.scanFirstCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
        // $('.scanFirstCol .areaContent').css({'display':'block'})
    }

})


$('#scanScend').on('click', function () {
    flag = !flag
    if (flag) {
        $('#scanScend img').attr('src', './jiangpindingxiang/images/huanyuan.png')
        // $("#scaleBtn img").addClass('huanyuan')
        $('.rowCol').css({ 'position': 'relative', 'height': '500px' })
        $('.scanseconCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
        $('.scanseconCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
        // $('.scanFirstCol .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
        $('.scanseconCol .areaList').css({ 'width': '25%', 'float': 'left' })
        $('.scanseconCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

    } else {
        $(".scanseconCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
        $('.scanseconCol').css({ 'position': 'static' })
        $('#scanScend img').attr('src', './jiangpindingxiang/images/zoom.png')
        $('.scanseconCol .areaList').css({ 'width': '100%', 'float': 'none' })
        $('.scanseconCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
        // $('.scanFirstCol .areaContent').css({'display':'block'})
    }

})
$(function () {
    layui.use(['layer', 'form'], function () {
        form = layui.form;
        form.render()
        var scanFirst = [
            {
                parentId: 34,
                id: 42,
                label: '微信'
            },
            {
                parentId: 36,
                id: 43,
                label: '支付宝'
            },
            {
                parentId: 38,
                id: 44,
                label: '其他'
            }
        ]
        var scanSecond = [
            {
                parentId: 42,
                id: 45,
                label: 'qq'
            },
            {
                parentId: 42,
                id: 46,
                label: '微博'
            }
        ]
        var scanSecond2 = [
            {
                parentId: 43,
                id: 47,
                label: 'qq'
            },
            {
                parentId: 43,
                id: 48,
                label: '微博2'
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
        scanFirstData(scanFirst)
        function scanFirstData(scanFirst) {
            var str = ""
            scanFirst.forEach(item => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str += `
                <div class="areaList first" scan_id="${item.id}" data_item="${tempJsonStr}">
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

            $("#scanFirstList").html(str)
            form.render()
        }
        //scanSecList
        function scanSecondData(scanSecond) {
            var str2 = ""
            scanSecond.forEach(item => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str2 += `
            <div class="areaList first" scanSec_id="${item.id}" scanParentId="${item.parentId}" data_item="${tempJsonStr}">
            <p class="areaName areaNames">${item.label}</p>
                <div class='checkboxs'>
                    <form class="layui-form area-form" action="" >
                        <div class="area-checkbox" > 
                            <input lay-filter="scanSecond"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                            <div class="area-img"></div>
                        </div>
                </form>
                </div>
            </div>`
            })
            $("#scanSecList").html(str2)
            form.render()
        }
        var arr = [];
        //自定义-1级选中与清空
        $("#scanFirstList ").on("click", ".areaName", function () {
            let scanFirstid = $(this).parent().attr("scan_id")
            if ($(this).hasClass("cur")) {
                $(this).removeClass("cur")
                let transtionArr = arr.filter(item => scanFirstid == item.parentId)
                arr = arr.filter(item => !transtionArr.some(el => el.id == item.id))
                scanSecondData(arr)
                form.render()
            } else {
                $(this).addClass("cur")
                if ($(this).parent().index() > 0) {
                    arr = arr.concat(scanSecond2)
                } else {
                    arr = arr.concat(scanSecond)
                }

                arr=processConmon(arr,'label')
                scanSecondData(arr)
                localStorage.setItem('scanData', JSON.stringify(arr))
                $('#scanFirstList .areaList').find(".area-img").removeClass('is-indeterminate')
                var that=this
                getcheckedDom(that, scanFirstid, "#scanSecList","scanParentId")
                form.render()
            }
            scanFirstChecked(form)
            scanSecondCheckeds(form)
        })
        //自定义-1级筛选
        scanFirstChange()
        function scanFirstChange() {
            // scanFirstData(scanFirst)
            $("#scanFirstSearch").on("input", function () {
                let scanFirstArr = []
                let str = ""
                let keyWord = $("#scanFirstSearch").val()
                scanFirst.forEach(item => {
                    let scanFirstItem = item.label
                    if (scanFirstItem.indexOf(keyWord) > -1) {
                        scanFirstArr.push(item)
                    }
                })
                scanFirstData(scanFirstArr)
                form.render()
            })
        }
        //自定义-2级筛选
        scanSecondChange()
        function scanSecondChange() {
            let scanDatas = localStorage.getItem('scanData')
            let scanDatasaArr = JSON.parse(scanDatas)
            $("#scanSecondSearch").on("input", function () {
                let scanSecondtArr = []
                let str2 = ""
                let keyWord = $("#scanSecondSearch").val()
                scanDatasaArr.forEach(item => {
                    let scanFirstItem = item.label
                    if (scanFirstItem.indexOf(keyWord) > -1) {
                        scanSecondtArr.push(item)
                    }
                })
                scanSecondData(scanSecondtArr)
                form.render()
            })
        }
        //自定义-1级选中的checkbox
        function scanFirstChecked(form) {
            let chknum = $("#scanFirstList .areaList").find("input[type='checkbox']:checked").length;
            let inputCheck = $("#scanFirstList .areaList").find("input[type='checkbox']").length
            if (chknum == inputCheck && chknum > 0) {
                $("#scanFirstAll").find("input[type='checkbox']").prop("checked", true)
            } else {
                $("#scanFirstAll").find("input[type='checkbox']").prop("checked", false)
            }
            form.render();
        }

        //自定义-2级选中的checkbox
        function scanSecondCheckeds(form) {
            let chknum2 = $("#scanSecList .areaList").find("input[type='checkbox']:checked").length;
            let inputCheck2 = $("#scanSecList .areaList").find("input[type='checkbox']").length
            if (chknum2 == inputCheck2 && chknum2 > 0) {
                $("#scanSecondAll").find("input[type='checkbox']").prop("checked", true)
            } else {
                $("#scanSecondAll").find("input[type='checkbox']").prop("checked", false)
            }
            form.render();
        }
        //自定义-1级点击checkbox
        $("#scanFirstList .checkboxs").on("click", function () {
            console.log("scanFirstList--checkboxs");
            let scanFirstId = $(this).parent().attr("scan_id")
            if ($(this).find(".area-img").hasClass('is-indeterminate')) {
                $(this).find(".area-img").removeClass('is-indeterminate')
                $(this).find("input[type='checkbox']").prop("checked", true)
                $("#scanSecList .areaList").each(function () {
                    if (scanFirstId == $(this).attr("scanParentId")) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                    }
                })
                form.render()
                 } else {
                 if (!$(this).find("input[type='checkbox']").prop("checked")) {
                     $(this).find("input[type='checkbox']").prop("checked", false)
                     $("#scanSecList .areaList").each(function () {
                        if (scanFirstId == $(this).attr("scanParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", false)
                        }
                    })
                    form.render()
                } else {
                    $(this).find("input[type='checkbox']").prop("checked", true)
                    $("#scanSecList .areaList").each(function () {
                        if (scanFirstId == $(this).attr("scanParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", true)
                        }
                    })
                    form.render()
                }
            }
            scanFirstChecked(form)
            scanSecondCheckeds(form)

        })
       
        //自定义-2级点击checkbox
        $(document).on("click","#scanSecList .checkboxs", function () {
           let scanSecondId=$(this).parent().attr("scanParentId")
           let scanSecondChecked=`#scanSecList .areaList[scanParentId='${scanSecondId}']`
           let scanSecondChecked2=$(scanSecondChecked).find("input[type='checkbox']:checked").length
           $("#scanFirstList .areaList").each(function () {
              if(scanSecondId == $(this).attr("scan_id")){
                  if(scanSecondChecked2 == $(scanSecondChecked).length){
                    $(this).find("input[type='checkbox']").prop("checked", true)
                    $(this).find(".area-img").removeClass("is-indeterminate")
                  }else if(scanSecondChecked2>0 && scanSecondChecked2<$(scanSecondChecked).length){
                    $(this).find("input[type='checkbox']").prop("checked", false)
                    $(this).find(".area-img").addClass("is-indeterminate")
                  }else{
                    $(this).find("input[type='checkbox']").prop("checked", false)
                    $(this).find(".area-img").removeClass("is-indeterminate")
                  }
              }

           })
           scanFirstChecked(form)
           scanSecondCheckeds(form)
        })
        //自定义-1级全选
        $("#scanFirstAll").on("click",function(){
            scanAll()
            form.render()
        })
        function scanAll(){
            $("#scanFirstList .areaList").find(".area-img").removeClass("is-indeterminate")
            $("#scanSecList .areaList").find(".area-img").removeClass("is-indeterminate")
          let scanAllFirst= $("#scanFirstAll").find("input[type='checkbox']").prop("checked")
          $("#scanFirstList .areaList").each(function () {
              let scanallId=$(this).attr("scan_id")
              $(this).find("input[type='checkbox']").prop("checked", scanAllFirst)
              $("#scanSecList .areaList").each(function () {
                  if(scanallId == $(this).attr("scanParentId")){
                    $(this).find("input[type='checkbox']").prop("checked", scanAllFirst)
                  }
              })
          })
          scanFirstChecked(form)
          scanSecondCheckeds(form)
          form.render()
        }
        //自定义-2级全选
        $("#scanSecondAll").on("click",function(){
            scansecondAll()
            form.render()
        })
        function scansecondAll(){
            console.log("scanSecList");
            $("#scanFirstList .areaList").find(".area-img").removeClass("is-indeterminate")
            $("#scanSecList .areaList").find(".area-img").removeClass("is-indeterminate")
            let scanAllSecond= $("#scanSecondAll").find("input[type='checkbox']").prop("checked")
            $("#scanSecList .areaList").each(function () {
                console.log("scanSecList2");
                let scanallsecond=$(this).attr("scanParentId")
                $(this).find("input[type='checkbox']").prop("checked", scanAllSecond)
                $("#scanFirstList .areaList").each(function () {
                    console.log("scanSecList4");
                    if(scanallsecond == $(this).attr("scan_id")){
                      $(this).find("input[type='checkbox']").prop("checked", scanAllSecond)
                    }
                })
            })
            scanFirstChecked(form)
          scanSecondCheckeds(form)
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