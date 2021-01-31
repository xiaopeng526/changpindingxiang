//联网方式
var flag = false;
$('#wirelessBtn').on('click', function () {
    console.log(11);
    flag = !flag
    if (flag) {
        $('#wirelessBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
        // $("#scaleBtn img").addClass('huanyuan')
        $('.rowCol').css({ 'position': 'relative', 'height': '500px' })
        $('.wirelessCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
        $('.wirelessCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
        // $('.wirelessCol .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
        $('.wirelessCol .areaList').css({ 'width': '25%', 'float': 'left' })
        $('.wirelessCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

    } else {
        $(".wirelessCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
        $('.wirelessCol').css({ 'position': 'static' })
        $('#wirelessBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
        $('.wirelessCol .areaList').css({ 'width': '100%', 'float': 'none' })
        $('.wirelessCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
        // $('.wirelessCol .areaContent').css({'display':'block'})
    }

})

//二级的展开
var flag = false;
$('#networkingLevel').on('click', function () {
    console.log(11);
    flag = !flag
    if (flag) {
        $('#networkingLevel img').attr('src', './jiangpindingxiang/images/huanyuan.png')
        // $("#scaleBtn img").addClass('huanyuan')
        $('.rowCol').css({ 'position': 'relative', 'height': '500px' })
        $('.networkingLevelCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
        $('.networkingLevelCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
        // $('.networkingLevelCol .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
        $('.networkingLevelCol .areaList').css({ 'width': '25%', 'float': 'left' })
        $('.networkingLevelCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

    } else {
        $(".networkingLevelCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
        $('.networkingLevelCol').css({ 'position': 'static' })
        $('#networkingLevel img').attr('src', './jiangpindingxiang/images/zoom.png')
        $('.networkingLevelCol .areaList').css({ 'width': '100%', 'float': 'none' })
        $('.networkingLevelCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
        // $('.networkingLevelCol .areaContent').css({'display':'block'})
    }

})

$(function () {
    layui.use(['layer', 'form'], function () {
        form = layui.form;
        var newWork = [
            {
                parentId: 26,
                id: 32,
                label: 'wifi'


            },
            {
                parentId: 27,
                id: 33,
                label: '运营商无线'


            }
        ]
        var erji = [
            {
                parentId: 32,
                id: 34,
                label: '移动'
            },
            {
                parentId: 32,
                id: 35,
                label: '联通'
            }
        ]
        var erji2 = [
            {
                parentId: 33,
                id: 36,
                label: '电信'
            },
            {
                parentId: 33,
                id: 40,
                label: '联通2'
            }
        ]

        var arr = [], arr2 = []
        //调用联网方式
        newWorkData(newWork)
        function newWorkData(newWork) {
            var str = ""
            newWork.forEach((item) => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str += `
                    <div class="areaList first" newWork_id="${item.id}" data_item="${tempJsonStr}">
                    <p class="areaName areaNames">${item.label}</p>
                        <div class='checkboxs'>
                            <form class="layui-form area-form" action="" >
                                <div class="area-checkbox" > 
                                    <input lay-filter="newWork"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                    <div class="area-img"></div>
                                </div>
                        </form>
                        </div>
                    </div>`
            })
            $("#newWorkList").html(str)
            form.render()
        }
        //调用二级
        function erjiDataList(erji) {
            var str2 = ""
            erji.forEach((item) => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str2 += `
                    <div class="areaList first" erji_id="${item.id}" erjiParentId="${item.parentId}" data_item="${tempJsonStr}">
                    <p class="areaName areaNames">${item.label}</p>
                        <div class='checkboxs'>
                            <form class="layui-form area-form" action="" >
                                <div class="area-checkbox" > 
                                    <input lay-filter="erji"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                    <div class="area-img"></div>
                                </div>
                        </form>
                        </div>
                    </div>`
            })
            $("#erjiList").html(str2)
            form.render()

        }
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
        //联网方式的选中与清空
        $("#newWorkList ").on("click", ".areaName", function () {
            let newWorkId = $(this).parent().attr("newWork_id")
            if ($(this).hasClass("cur")) {
                $(this).removeClass("cur")
                let transtionArr = arr.filter(item => newWorkId == item.parentId)
                console.log(transtionArr);
                arr = arr.filter(item => !transtionArr.some(el => el.id == item.id))
                erjiDataList(arr)
                form.render()
            } else {
                $(this).addClass("cur")
                if ($(this).parent().index() > 0) {
                    arr = arr.concat(erji2)
                } else {
                    arr = arr.concat(erji)
                }
                arr=processConmon(arr,'label')
                erjiDataList(arr)
                localStorage.setItem('newWorkData', JSON.stringify(arr))
                $('#newWorkList .areaList').find(".area-img").removeClass('is-indeterminate')
                var that=this
                getcheckedDom(that,newWorkId,"#erjiList", "erjiParentId")
                form.render()
            }
            newWorkChecked(form)
            erjiChecked(form) 
        })
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
        //联网方式的筛选
        newWorkSearchs(form)
        function newWorkSearchs(form) {
            newWorkData(newWork)

            $("#newWorkSearch").on("input", function () {
                console.log("newWork");
                let newWorkDataArr = []
                let keyWord = $("#newWorkSearch").val()
                let str = ""
                newWork.forEach(item => {
                    let newWorkITem = item.label
                    if (newWorkITem.indexOf(keyWord) > -1) {
                        newWorkDataArr.push(item)
                    }
                })
                newWorkData(newWorkDataArr)
                form.render()

            })
        }
        //二级的筛选
        erjiSearch()
        function erjiSearch() {
            let erjiData = localStorage.getItem('newWorkData')
            let erjiDataArr = JSON.parse(erjiData)
           
            $("#erjiSearchs").on("input", function () {
                var erjiArr = []
                let str2 = ""
                let keyWord = $("#erjiSearchs").val()
                erjiDataArr.forEach(item => {
                    let erjiItem = item.label
                    if (erjiItem.indexOf(keyWord) > -1) {
                        erjiArr.push(item)
                    }

                })
                console.log(erjiArr);
                erjiDataList(erjiArr)
                form.render()
            })
        }

        //联网方式-点击checkbox
        newWorkChange()
        function newWorkChange() {
            $("#newWorkList .checkboxs").on("click", function () {
                console.log("newWorkList");
                let newWorkId = $(this).parent().attr("newWork_id")
                if ($(this).find(".area-img").hasClass("is-indeterminate")) {
                    $(this).find(".area-img").removeClass("is-indeterminate")
                    $(this).find("input[type='checkbox']").prop("checked", true)
                    $("#erjiList .areaList").each(function () {
                        if (newWorkId == $(this).attr("erjiParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", true)
                        }
                    })
                    form.render()
                } else {
                    if (!$(this).find("input[type='checkbox']").prop("checked")) {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $("#erjiList .areaList").each(function () {
                            if (newWorkId == $(this).attr("erjiParentId")) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                            }
                        })
                        form.render()
                    } else {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        $("#erjiList .areaList").each(function () {
                            if (newWorkId == $(this).attr("erjiParentId")) {
                                $(this).find("input[type='checkbox']").prop("checked", true)
                            }
                          
                        })
                        form.render()
                    }
                }
                newWorkChecked(form)
                erjiChecked(form)
                form.render()
            })
        }
        //二级-点击checkbox
        $(document).on("click","#erjiList .checkboxs", function () {
            let erjisParentId = $(this).parent().attr("erjiParentId")
            let erjisParentId2 = `#erjiList .areaList[erjiParentId='${erjisParentId}']`
            let erjisParentIdChecked = $(erjisParentId2).find("input[type='checkbox']:checked").length
            $("#newWorkList .areaList").each(function () {
                if ($(this).attr("newWork_id") == erjisParentId) {
                    if (erjisParentIdChecked == $(erjisParentId2).length) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        $(this).find(".area-img").removeClass("is-indeterminate")
                    } else if (erjisParentIdChecked > 0 && erjisParentIdChecked < $(erjisParentId2).length) {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").addClass("is-indeterminate")
                    } else {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").removeClass("is-indeterminate")
                    }
                }
            })
            newWorkChecked(form)
            erjiChecked(form)
        })

        //联网方式选中的checkbox
        function newWorkChecked(form) {
            let chknum3 = $("#newWorkList .areaList").find("input[type='checkbox']:checked").length;
            let inputCheck3 = $("#newWorkList .areaList").find("input[type='checkbox']").length
            if (chknum3 == inputCheck3 && chknum3>0) {
                $("#newWorkAll").find("input[type='checkbox']").prop("checked", true)
            } else {
                $("#newWorkAll").find("input[type='checkbox']").prop("checked", false)
            }
            form.render()
        }
        //二级选中的checkbox
        function erjiChecked(form) {
            let chknum2 = $("#erjiList .areaList").find("input[type='checkbox']:checked").length;
            let inputCheck2 = $("#erjiList .areaList").find("input[type='checkbox']").length
            if (chknum2 == inputCheck2 && chknum2>0 ) {
                $("#erjiAll").find("input[type='checkbox']").prop("checked", true)
            } else {
                $("#erjiAll").find("input[type='checkbox']").prop("checked", false)
            }
            
            form.render()
        }
        //联网方式全选
        $("#newWorkAll").on("click", function () {
            newWorkCheckedAll()
            form.render()
        })
        function newWorkCheckedAll() {
            $("#newWorkList .areaList").find(".area-img").removeClass("is-indeterminate")
            $("#erjiList .areaList").find(".area-img").removeClass("is-indeterminate")
            let newAll = $("#newWorkAll").find("input[type='checkbox']").prop("checked")
            $("#newWorkList .areaList").each(function () {
                let newWorksID = $(this).attr("newWork_id")
                $(this).find("input[type='checkbox']").prop("checked", newAll)
                $("#erjiList .areaList").each(function () {
                    if (newWorksID == $(this).attr("erjiParentId")) {
                        $(this).find("input[type='checkbox']").prop("checked", newAll)
                    }
                })
            })
            newWorkChecked(form)
            erjiChecked(form)
        }
        //二级全选
        $("#erjiAll").on("click", function () {
            erjiCheckedAll()
            form.render()
        })
        function erjiCheckedAll() {
            $("#newWorkList .areaList").find(".area-img").removeClass("is-indeterminate")
            $("#erjiList .areaList").find(".area-img").removeClass("is-indeterminate")
            let erjiesAll = $("#erjiAll").find("input[type='checkbox']").prop("checked")
            $("#erjiList .areaList").each(function () {
                let newWorkIds = $(this).attr("erjiParentId")
                 $(this).find("input[type='checkbox']").prop("checked",erjiesAll)
                $("#newWorkList .areaList").each(function () {
                    if (newWorkIds == $(this).attr("newWork_id")) {
                        $(this).find("input[type='checkbox']").prop("checked",erjiesAll)
                    }
                 
                })
               
            })
            if($("#erjiList .areaList").length){
                erjiChecked(form)
            }
            newWorkChecked(form)
            erjiChecked(form)
            form.render()
        }
    });
})
