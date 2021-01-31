
$(function () {
    //区域的展开
    var flag = false;
    $('#cityLine').on('click', function () {
        console.log(11);
        flag = !flag
        if (flag) {
            $('#cityLine img').attr('src', './jiangpindingxiang/images/huanyuan.png')
            // $("#scaleBtn img").addClass('huanyuan')
            $('.rowCol').css({ 'position': 'relative', 'height': '300px' })
            $('.cityArea').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $('.cityArea').css({ 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '30' })
            // $('.cityArea .areaContent').css({'display':'flex','flex-wrap':'wrap','justify-content':'flex-start','align-items':'center'})
            $('.cityArea .areaList').css({ 'width': '25%', 'float': 'left' })
            $('.cityArea .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

        } else {
            $(".cityArea").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
            $('.cityArea').css({ 'position': 'static' })
            $('#cityLine img').attr('src', './jiangpindingxiang/images/zoom.png')
            $('.cityArea .areaList').css({ 'width': '100%', 'float': 'none' })
            // $('.cityArea .areaList').css({'width':'100%'})
            $('.cityArea .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
            // $('.cityArea .areaContent').css({'display':'block'})
        }

    })
    //地市的展开
    var flag = false;
    $('#cities').on('click', function () {
        console.log(11);
        flag = !flag
        if (flag) {
            $('#cities img').attr('src', './jiangpindingxiang/images/huanyuan.png')
            // $("#scaleBtn img").addClass('huanyuan')
            $('.rowCol').css({ 'position': 'relative', 'height': '500px' })
            $('.cityLines').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $('.cityLines').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '30' })
            $('.cityLines .areaContent').css({ 'display': 'flex', 'flex-wrap': 'wrap', 'justify-content': 'flex-start', 'align-items': 'center' })
            $('.cityLines .areaList').css({ 'width': '25%' })
            $('.cityLines .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

        } else {
            $(".cityLines").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
            $('.cityLines').css({ 'position': 'static' })
            $('#cities img').attr('src', './jiangpindingxiang/images/zoom.png')
            $('.cityLines .areaList').css({ 'width': '100%' })
            $('.cityLines .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
            $('.cityLines .areaContent').css({ 'display': 'block' })
        }

    })
    //区县的展开
    var flag = false;
    $('#citycountry').on('click', function () {
        console.log(11);
        flag = !flag
        if (flag) {
            $('#citycountry img').attr('src', './jiangpindingxiang/images/huanyuan.png')
            // $("#scaleBtn img").addClass('huanyuan')
            $('.rowCol').css({ 'position': 'relative', 'height': '500px' })
            $('.cityCountryCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $('.cityCountryCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '10' })
            $('.cityCountryCol .areaContent').css({ 'display': 'flex', 'flex-wrap': 'wrap', 'justify-content': 'flex-start', 'align-items': 'center' })
            $('.cityCountryCol .areaList').css({ 'width': '25%' })
            $('.cityCountryCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

        } else {
            $(".cityCountryCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
            $('.cityCountryCol').css({ 'position': 'static' })
            $('#citycountry img').attr('src', './jiangpindingxiang/images/zoom.png')
            $('.cityCountryCol .areaList').css({ 'width': '100%' })
            $('.cityCountryCol .selectfa').css({ 'border': 'none', 'margin-top': '17px', 'padding-top': '0' })
            $('.cityCountryCol .areaContent').css({ 'display': 'block' })
        }

    })




    // layui.use(['layer', 'form'], function () {
    //     form = layui.form;
    //     // cityLineChange(form)
    //     //  cityLines(form)
    //     // citys(form)


    // });

    layui.use(['layer', 'form', 'jquery'], function () {
        form = layui.form;
        form.render();
        var cityLine = [
            {
                id: 20,
                label: '一线城市'

            },
            {
                id: 22,
                label: '二线城市'
            }
        ]
        var citysLine = [
            {
                parentId: 20,
                id: 23,
                label: '一线北京'
            },
            {
                parentId: 20,
                id: 24,
                label: '一线广州'
            }
        ]
        var citysLine2 = [
            {
                parentId: 22,
                id: 25,
                label: '二线深圳'
            },
            {
                parentId: 22,
                id: 26,
                label: '二线成都'
            }

        ]
        var countyline = [
            {
                parentId: 23,
                id: 27,
                label: '北京市-朝阳区'
            },
            {
                parentId: 23,
                id: 28,
                label: '北京市-通州区'
            }

        ]
        var countyline2 = [
            {
                parentId: 24,
                id: 29,
                label: '北京市-东城区'
            },
            {
                parentId: 24,
                id: 31,
                label: '北京市-黄埔区'
            }
        ]
        var arr = [], arr2 = [], arr3 = []
        cityLines(cityLine)
        function cityLines(cityLine) {
            console.log();
            var str = ""
            cityLine.forEach((item) => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str += `
                    <div class="areaList first" dataLine_id="${item.id}" data_item="${tempJsonStr}">
                    <p class="areaName areaNames">${item.label}</p>
                        <div class='checkboxs'>
                            <form class="layui-form area-form" action="" >
                                <div class="area-checkbox" > 
                                    <input lay-filter="test"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                    <div class="area-img"></div>
                                </div>
                        </form>
                        </div>
                    </div>`
            })
            $("#cityLines").html(str)
        }
        function cityDataLine(citysLine) {
            var str2 = ""
            citysLine.forEach((item) => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str2 += `
        <div class="areaList first" city_idLine="${item.id}" cityLineParentId="${item.parentId}" data_item="${tempJsonStr}">
             <p class="areaName areaNames">${item.label}</p>
             <div class='checkboxs'>
                  <form class="layui-form area-form" action="" >
                       <div class="area-checkbox" > 
                        <input lay-filter="cityLineChecked"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                        <div class="area-img"></div>
                       </div>
                   </form>
              </div>
         </div>`
            })
            $("#lineCity").html(str2)


        }

        function countyLine(countyline) {
            var str3 = ""
            countyline.forEach((item) => {
                var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
                str3 += `
            <div class="areaList first" county_id="${item.id}" countyLineParentId="${item.parentId}" data_item="${tempJsonStr}">
            <p class="areaName areaNames">${item.label}</p>
                <div class='checkboxs'>
                    <form class="layui-form area-form" action="">
                        <div class="area-checkbox" > 
                            <input lay-filter="countyLineChecked"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                            <div class="area-img"></div>
                        </div>
                </form>
                </div>
            </div>`
            })

            $("#lineCountys").html(str3)


        }
        //区域的选中与清空
        $("#cityLines").on('click', '.areaName', function () {
            let Id = $(this).parent().attr("dataLine_id")
            if ($(this).hasClass("cur")) {
                $(this).removeClass("cur")

                let transtionArr = arr.filter(item => Id == item.parentId)

                arr = arr.filter(item => !transtionArr.some(el => el.id == item.id))

                cityDataLine(arr)
                form.render()
            } else {
                $(this).addClass("cur")
                if ($(this).parent().index() > 0) {
                    arr = arr.concat(citysLine2)

                } else {
                    arr = arr.concat(citysLine)

                }
                cityDataLine(arr)
                localStorage.setItem('cityLineData', JSON.stringify(arr))
                $('#cityLines .areaList').find(".area-img").removeClass('is-indeterminate')
                var that = this
                getcheckedDom(that, Id, "#lineCity", "cityLineParentId")
                form.render()
            }
            arr2 = []
            countyLine(arr2)
            cityCheckedChange(form)
            areaCheckedChange(form)
            countyCheckedChange(form)
        })
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

        //城市的选中与清空
        $("#lineCity").on('click', '.areaName', function () {
            let Id = $(this).parent().attr("city_idLine")
            if ($(this).hasClass("cur")) {
                $(this).removeClass("cur")

                let transtionArr = arr2.filter(item => Id == item.parentId)
                arr2 = arr2.filter(item => !transtionArr.some(el => el.id == item.id))
                countyLine(arr2)
                form.render()
            } else {
                $(this).addClass("cur")
                if ($(this).parent().index() > 0) {
                    arr2 = arr2.concat(countyline2)
                } else {
                    arr2 = arr2.concat(countyline)
                }
                countyLine(arr2)
                localStorage.setItem('countyLineData', JSON.stringify(arr2))
                $('#lineCity .areaList').find(".area-img").removeClass('is-indeterminate')
                var that = this
                getcheckedDom(that, Id, "#lineCountys", "countyLineParentId")
                form.render()

            }
            cityCheckedChange(form)
            areaCheckedChange(form)
            countyCheckedChange(form)
        })



        //区域选中的checkbox
        function areaCheckedChange(form) {
            var chkum = $("#cityLines .areaList").find("input[type='checkbox']:checked").length;
            var inputCheck = $("#cityLines .areaList").find("input[type='checkbox']").length;
            if (chkum == inputCheck) {
                $("#allSelectLine").find("input[type='checkbox']").prop("checked", true)
            } else {
                $("#allSelectLine").find("input[type='checkbox']").prop("checked", false)
            }

            form.render()
        }
        //城市选中的checkbox
        function cityCheckedChange(form) {
            var chknum = $("#lineCity .areaList").find("input[type='checkbox']:checked").length
            var inputCheck = $("#lineCity .areaList").find("input[type='checkbox']").length
            if (chknum == inputCheck && chknum > 0) {
                $("#cityLineAll").find("input[type='checkbox']").prop("checked", true)
            } else {
                $("#cityLineAll").find("input[type='checkbox']").prop("checked", false)
            }
            form.render()
        }
        //区县选中的checkbox
        function countyCheckedChange(form) {
            var chknum = $("#lineCountys .areaList").find("input[type='checkbox']:checked").length
            var inputCheck = $("#lineCountys .areaList").find("input[type='checkbox']").length
            if (chknum == inputCheck && chknum > 0) {
                $("#countyLineAll").find("input[type='checkbox']").prop("checked", true)
            } else {
                $("#countyLineAll").find("input[type='checkbox']").prop("checked", false)
            }
            form.render()
        }
        //区域全选
        $("#allSelectLine").on("click", function () {
            areaCheckedAll()
            form.render()
        })
        function areaCheckedAll() {
            $("#cityLines").find(".area-img").removeClass("is-indeterminate")
            $("#lineCity").find(".area-img").removeClass("is-indeterminate")
            $("#lineCountys").find(".area-img").removeClass("is-indeterminate")
            var areaChecked = $("#allSelectLine").find("input[type='checkbox']").prop("checked")
            $("#cityLines .areaList").each(function () {
                var areaId = $(this).attr("dataLine_id")
                var hasCur = $(this).find(".areaName").hasClass("cur")
                $(this).find("input[type='checkbox']").prop("checked", areaChecked)
                $("#lineCity .areaList").each(function () {
                    var cityId = $(this).attr("city_idLine")
                    var hasCur = $(this).find(".areaName").hasClass("cur")
                    if (areaId === $(this).attr("cityLineParentId") && hasCur) {
                        $(this).find("input[type='checkbox']").prop("checked", areaChecked)
                    }
                    $("#lineCountys .areaList").each(function () {
                        if (cityId === $(this).attr("countyLineParentId") && hasCur) {
                            $(this).find("input[type='checkbox']").prop("checked", areaChecked)
                        }
                    })
                })
            })
            areaCheckedChange(form)
            cityCheckedChange(form)
            countyCheckedChange(form)
        }

        //城市全选
        $("#cityLineAll").on('click', function () {
            cityCheckedAll()
            form.render()
        })

        function cityCheckedAll() {
            $("#cityLines").find(".area-img").removeClass("is-indeterminate")
            $("#lineCity").find(".area-img").removeClass("is-indeterminate")
            $("#lineCountys").find(".area-img").removeClass("is-indeterminate")
            var cityChecked = $("#cityLineAll").find("input[type='checkbox']").prop("checked")
            $("#lineCity .areaList").each(function () {
                console.log("lineCity");
                $(this).find("input[type='checkbox']").prop("checked", cityChecked)
                var cityId = $(this).attr("city_idLine")
                var cityParentid = $(this).attr("cityLineParentId")
                var hasCur = $(this).find(".areaName").hasClass("cur")

                $("#cityLines .areaList").each(function () {
                    var areaId = $(this).attr("dataLine_id")
                    var hasCur = $(this).find(".areaName").hasClass("cur")
                    if (areaId == cityParentid && hasCur) {
                        $(this).find("input[type='checkbox']").prop("checked", cityChecked)

                    }
                })
                $("#lineCountys .areaList").each(function () {
                    var hasCur = $(this).find(".areaName").hasClass("cur")
                    if (cityId == $(this).attr("countyLineParentId") && hasCur) {
                        $(this).find("input[type='checkbox']").prop("checked", cityChecked)
                    }
                })

            })

            areaCheckedChange(form)
            countyCheckedChange(form)
            cityCheckedChange(form)
        }

        //区县全选
        $("#countyLineAll").on("click", function () {
            countyCheckedAll()
            form.render()
        })
        function countyCheckedAll() {
            $("#cityLines").find(".area-img").removeClass("is-indeterminate")
            $("#lineCity").find(".area-img").removeClass("is-indeterminate")
            $("#lineCountys").find(".area-img").removeClass("is-indeterminate")
            var countyAll = $("#countyLineAll").find("input[type='checkbox']").prop("checked")
            $("#lineCountys .areaList").each(function () {
                var countyId = $(this).attr("countyLineParentId")
                var hasCur = $(this).find(".areaName").hasClass("cur")
                $(this).find("input[type='checkbox']").prop("checked", countyAll)
                $("#lineCity .areaList").each(function () {
                    var cityId = $(this).attr("city_idLine")
                    var cityParentid = $(this).attr("cityLineParentId")
                    var hasCur = $(this).find(".areaName").hasClass("cur")
                    if (countyId == cityId && hasCur) {
                        $(this).find("input[type='checkbox']").prop("checked", countyAll)
                    }
                    $("#cityLines .areaList").each(function () {
                        var areaId = $(this).attr("dataLine_id")
                        var hasCur = $(this).find(".areaName").hasClass("cur")
                        if (cityParentid == areaId) {
                            $(this).find("input[type='checkbox']").prop("checked", countyAll)
                        }
                    })
                })

            })
            cityCheckedChange(form)
            areaCheckedChange(form)
            countyCheckedChange(form)
        }
        //区域筛选
        areaSearch(form)
        function areaSearch(form) {
            // cityLines(cityLine)
            $("#areaLine").on("input", function () {
                var str = ""
                var keyWord = $("#areaLine").val()
                var areaLineArr = []

                cityLine.forEach(item => {
                    var itemlabel = item.label
                    if (itemlabel.indexOf(keyWord) > -1) {
                        areaLineArr.push(item)
                    }
                })
                cityLines(areaLineArr)
                // areaLineArr.forEach((item) => {
                //     str += `
                //         <div class="areaList first" dataLine_id="${item.id}">
                //         <p class="areaName areaNames">${item.label}</p>
                //             <div class='checkboxs'>
                //                 <form class="layui-form area-form" action="" >
                //                     <div class="area-checkbox area-line-checkbox" > 
                //                         <input lay-filter="test"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                //                         <div class="area-img"></div>
                //                     </div>
                //             </form>
                //             </div>
                //         </div>`
                // })
                // $("#cityLines").html(str)
                areaCheckedChange(form)
                form.render()
            })
        }
        //城市筛选
        citySearch(form)

        //县筛选
        countySearch(form)
        //城市筛选
        function citySearch(form) {
            let cityLineData = localStorage.getItem('cityLineData')
            let cityLineDataArr = JSON.parse(cityLineData)
            $("#cityLineAlls").on("input", function () {
                var cityLineArr = []
                var keyWord = $("#cityLineAlls").val()
                var str2 = ""
                cityLineDataArr.forEach(item => {
                    var labelitem = item.label
                    if (labelitem.indexOf(keyWord) > -1) {
                        cityLineArr.push(item)
                    }
                })
                cityDataLine(cityLineArr)
    //             cityLineArr.forEach((item) => {
    //                 str2 += `
    //   <div class="areaList first" city_idLine="${item.id}" cityLineParentId="${item.parentId}">
    //      <p class="areaName areaNames">${item.label}</p>
    //      <div class='checkboxs'>
    //           <form class="layui-form area-form" action="" >
    //                <div class="area-checkbox area-line-checkbox" > 
    //                 <input lay-filter="cityLineChecked"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
    //                 <div class="area-img"></div>
    //                </div>
    //            </form>
    //       </div>
    //  </div>`
    //             })
    //             $("#lineCity").html(str2)
                cityCheckedChange(form)
                form.render()

            })
        }
        //县筛选countyLineData
        function countySearch(form) {
            let countyLineData = localStorage.getItem('countyLineData')
            let countyLineDataArr = JSON.parse(countyLineData)
            $("#countyLinesAll").on("input", function () {
                var countyLineArr = []
                var keyWord = $("#countyLinesAll").val()
                var str2 = ""
                countyLineDataArr.forEach(item => {
                    var labelitem = item.label
                    if (labelitem.indexOf(keyWord) > -1) {
                        countyLineArr.push(item)
                    }
                })
                countyLine(countyLineArr)
            //     countyLineArr.forEach((item) => {
            //         str2 += `
            // <div class="areaList first" county_id="${item.id}" countyLineParentId="${item.parentId}">
            // <p class="areaName areaNames">${item.label}</p>
            //     <div class='checkboxs'>
            //         <form class="layui-form area-form" action="">
            //             <div class="area-checkbox area-line-checkbox" > 
            //                 <input lay-filter="countyLineChecked"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
            //                 <div class="area-img"></div>
            //             </div>
            //     </form>
            //     </div>
            // </div>`
            //     })
            //     $("#lineCountys").html(str2)
                countyCheckedChange(form)
                form.render()

            })
        }

        //区域-点击checkbox
        areaLineChange()
        function areaLineChange() {
            $("#cityLines .checkboxs").on("click", function () {
                console.log("area");
                let areaLineId = $(this).parent().attr("dataLine_id")
                if ($(this).find(".area-img").hasClass("is-indeterminate")) {
                    $(this).find(".area-img").removeClass("is-indeterminate")
                    $(this).find("input[type='checkbox']").prop("checked", true)
                    $("#lineCity .areaList").each(function () {
                        let cityLineId = $(this).attr("city_idLine")
                        if (areaLineId == $(this).attr("cityLineParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", true)

                            $("#lineCountys .areaList").each(function () {
                                if (cityLineId == $(this).attr("countyLineParentId")) {
                                    $(this).find("input[type='checkbox']").prop("checked", true)
                                }
                            })
                        }
                    })
                    form.render()
                } else {
                    if (!$(this).find("input[type='checkbox']").prop("checked")) {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $("#lineCity .areaList").each(function () {
                            let cityLineId = $(this).attr("city_idLine")
                            if (areaLineId == $(this).attr("cityLineParentId")) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $("#lineCountys .areaList").each(function () {
                                    if (cityLineId == $(this).attr("countyLineParentId")) {
                                        $(this).find("input[type='checkbox']").prop("checked", false)
                                    }
                                })
                            }
                        })
                        form.render()
                    } else {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        $("#lineCity .areaList").each(function () {
                            let cityLineId = $(this).attr("city_idLine")
                            if (areaLineId == $(this).attr("cityLineParentId")) {
                                $(this).find("input[type='checkbox']").prop("checked", true)
                                $("#lineCountys .areaList").each(function () {
                                    if (cityLineId == $(this).attr("countyLineParentId")) {
                                        $(this).find("input[type='checkbox']").prop("checked", true)
                                    }
                                })
                            }
                            form.render()
                        })
                    }
                }
                cityCheckedChange(form)
                 areaCheckedChange(form)
                countyCheckedChange(form)
            })
        }
        //城市-点击checkbox
        $("#lineCity").on("click", " .area-checkbox", function () {
            console.log("city");
            let cityLinesId = $(this).parent().parent().parent().attr("city_idLine")
            let cityLinesId2 = $(this).parent().parent().parent().attr("cityLineParentId")
            let cityLinesIds = `#lineCity .areaList[cityLineParentId='${cityLinesId2}']`
            let cityLinesIdChecked = $(cityLinesIds).find("input[type='checkbox']:checked").length;
            if ($(this).find(".area-img").hasClass("is-indeterminate")) {
                $(this).find(".area-img").removeClass("is-indeterminate")
                $(this).find("input[type='checkbox']").prop("checked", true)
                $("#lineCountys .areaList").each(function () {
                    if (cityLinesId == $(this).attr("countyLineParentId")) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                    }
                })
                form.render()
            } else {
                if (!$(this).find("input[type='checkbox']").prop("checked")) {
                    $(this).find("input[type='checkbox']").prop("checked", false)
                    $("#lineCountys .areaList").each(function () {
                        if (cityLinesId == $(this).attr("countyLineParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", false)
                        }
                    })
                    form.render()
                } else {
                    $(this).find("input[type='checkbox']").prop("checked", true)
                    $("#lineCountys .areaList").each(function () {
                        if (cityLinesId == $(this).attr("countyLineParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", true)
                        }
                    })
                    form.render()
                }
            }
            $("#cityLines .areaList").each(function () {
                if (cityLinesId2 == $(this).attr("dataLine_id")) {
                    if (cityLinesIdChecked == $(cityLinesIds).length) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        $(this).find(".area-img").removeClass("is-indeterminate")
                    } else if (cityLinesIdChecked > 0 && cityLinesIdChecked < $(cityLinesIds).length) {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").addClass("is-indeterminate")
                    } else {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").removeClass("is-indeterminate")
                    }
                    areaCheckedChange(form)
                }
            })
            cityLinesId = " "
            cityCheckedChange(form)
            areaCheckedChange(form)
            countyCheckedChange(form)
        })
        //区县-点击checkbox
        $("#lineCountys ").on("click", ".area-checkbox", function () {
            console.log("County");
            let countyLineId = $(this).parent().parent().parent().attr("countyLineParentId")
            let countyLineId2 = `#lineCountys .areaList[countyLineParentId='${countyLineId}']`
            let countyLineChecked = $(countyLineId2).find("input[type='checkbox']:checked").length;
            $("#lineCity .areaList").each(function () {
                console.log("County2");
                let cityLinesID = $(this).attr("city_idLine")
                let cityLinesID2 = $(this).attr("cityLineParentId")
                let cityLinesID3 = `#lineCity .areaList[cityLineParentId='${cityLinesID2}']`
                let cityLinesID2Checked = $(cityLinesID3).find("input[type='checkbox']:checked").length
                $(this).find(".area-img").removeClass("is-indeterminate")
                if (countyLineId == cityLinesID) {
                    if (countyLineChecked == $(countyLineId2).length) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        $(this).find(".area-img").removeClass("is-indeterminate")
                        let cityLinesChecked2 = `#lineCity .areaList[cityLineParentId='${cityLinesID2}']`//重新获取数量
                        let cityLinesChecked3 = $(cityLinesChecked2).find("input[type='checkbox']:checked").length
                        if (cityLinesChecked3 == $(cityLinesChecked2).length) {
                            $("#cityLines .areaList").each(function () {
                                let areacityLine = $(this).attr("dataLine_id")
                                if (areacityLine == cityLinesID2) {
                                    $(this).find("input[type='checkbox']").prop("checked", true)
                                    $(this).find(".area-img").removeClass("is-indeterminate")
                                }
                            })
                        }
                    }
                    else if (countyLineChecked > 0 && countyLineChecked < $(countyLineId2).length) {
                        console.log("County3");
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").addClass("is-indeterminate")
                        $("#cityLines .areaList").each(function () {
                            if (cityLinesID2 == $(this).attr("dataLine_id")) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $(this).find(".area-img").addClass("is-indeterminate")
                            }
                            form.render()
                        })

                    }
                    else {
                        console.log("County4");
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").removeClass("is-indeterminate")
                        $("#cityLines .areaList").each(function () {
                            if (cityLinesID2 == $(this).attr("dataLine_id") && cityLinesID2Checked == 0) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $(this).find(".area-img").removeClass("is-indeterminate")
                            }
                            form.render()
                        })
                        cityCheckedChange(form)
                    }
                }



            })
            cityCheckedChange(form)
            areaCheckedChange(form)
            countyCheckedChange(form)
        })

    })

})

