$(function () {
    localStorage.removeItem('provinceData');
    //地域的展开
    var flag = false;
    $('#scaleBtn').on('click', function () {
        flag = !flag
        if (flag) {
            $('#scaleBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
            // $("#scaleBtn img").addClass('huanyuan')
            $('.rowCol').css({ 'position': 'relative', 'height': '500px' })
            $('.layuiCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $('.layuiCol').css({ 'display': 'block', 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '30' })
            $('.layuiCol .areaList').css({ 'float': 'left', 'width': '25%' })
            $('.layuiCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

        } else {
            $(".layuiCol").removeClass('layui-col-x12 layui-col-sm12 layui-col-md12')
            $('.layuiCol').css({ 'position': 'static' })
            $('#scaleBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
            $('.layuiCol .areaList').css({ 'width': '100%', 'float': 'none' })
            $('.layuiCol .selectfa').css({ 'border': 'none', 'padding-top': '0', 'margin-top': '0.15rem' })
        }

    })
    //省的展开
    $("#scaleProvinceBtn").on('click', function () {
        flag = !flag
        if (flag) {
            $('#scaleProvinceBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
            $('.rowCol').css({ 'position': 'relative', 'height': '500px' })
            $('.provinceCol').addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $('.provinceCol').css({ 'position': 'absolute', 'background': "#fff", 'top': "0", 'zIndex': '30' })
            $('.provinceCol .areaList').css({ 'width': '25%', 'float': 'left' })
            $('.provinceCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

        } else {
            $('#scaleProvinceBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
            $('.provinceCol').removeClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $('.provinceCol').css({ 'position': 'static' })
            $('.provinceCol .areaList').css({ 'width': '100%', 'float': 'none' })
            $('.provinceCol .selectfa').css({ 'border': 'none', 'padding-top': '0', 'margin-top': '0.15rem' })

        }
    })
    //城市的展开
    $("#scaleCityBtn").on('click', function () {
        flag = !flag;
        if (flag) {
            $('#scaleCityBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
            $(".rowCol").css({ 'position': 'relative', 'height': '500px' })
            $(".cityCol").css({ 'position': 'absolute', 'background': '#fff', 'top': '0', 'zIndex': '10' })
            $(".cityCol").addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $(".cityCol .areaList").css({ 'float': 'left', 'width': '25%' })
            $('.cityCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })

        } else {
            $('#scaleCityBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
            $(".cityCol").css({ 'position': 'static' })
            $(".cityCol").removeClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $(".cityCol .areaList").css({ 'width': '100%', 'float': 'none' })
            $('.cityCol .selectfa').css({ 'border': 'none', 'padding-top': '0', 'margin-top': '0.15rem' })

        }


    })
    //县的展开
    $("#scaleCountryBtn").on('click', function () {
        flag = !flag;
        if (flag) {
            $('#scaleCountryBtn img').attr('src', './jiangpindingxiang/images/huanyuan.png')
            $(".rowCol").css({ 'position': 'relative', 'height': '500px' })
            $(".countryCol").css({ 'position': 'absolute', 'top': '0', 'background': '#fff', 'zIndex': '10' })
            $(".countryCol").addClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $(".countryCol .areaList").css({ 'width': '25%', 'float': 'left' })
            $('.countryCol .selectfa').css({ 'display': 'block', 'width': '100%', 'display': 'flex', 'justify-content': 'flex-end', 'border-top': '1px solid #bcbcbc', 'margin-top': '0.1rem', 'padding-top': '0.1rem', 'padding-right': '0.1rem' })
        } else {
            $('#scaleCountryBtn img').attr('src', './jiangpindingxiang/images/zoom.png')
            $(".countryCol").css({ 'position': 'static' })
            $(".countryCol").removeClass('layui-col-xs12 layui-col-sm12 layui-col-md12')
            $(".countryCol .areaList").css({ 'width': '100%', 'float': 'none' })
            $('.countryCol .selectfa').css({ 'border': 'none', 'padding-top': '0', 'margin-top': '0.15rem' })
        }
    })
    //年龄自定义偶数行表格变色
    $(".ageCustom table tbody tr:odd").addClass("ageCustomColor")
    $(".timeCustom table tbody tr:odd").addClass("ageCustomColor")
    //头部的折叠与展开
    window.onscroll = function () {
        var h = 200;
        var sTop = $(document).scrollTop();
        if (sTop > h) {
            $(".header").css({
                'display': 'none'
            })
            $(".headers").css({
                'display': 'block',
                'position': 'fixed',
                'top': 0,
                'left': 0,
                'bottom': 0,
                'right': 0,
                'z-index': 1
            })
        }
    }

    var ageList = [
        // {
        //     id:'1',
        //     value1:'',
        //     value2:''
        // },
        // {
        //     id:'2', 
        //     value1:'',
        //     value2:''

        // }
    ]
  
    var timeList = [
        // {
        //     id:'',
        //     value1:'',
        //     value2:''
        // },
        // {
        //     id:'', 
        //     value1:'',
        //     value2:''

        // }
    ]
    layui.use(['form', 'layer', 'slider'], function () {
        var form = layui.form;
        var $ = layui.$
            , slider = layui.slider;
        form.on('radio(erweima)', function (data,index) {
            if (data.value === '不限制') {
                $('.test2 ').addClass('configuration-show')
                $('.cityLevel ').addClass('configuration-show');
                $('.ageCustom ').addClass('configuration-show');
                $('.wirelessCustomization ').addClass('configuration-show');
                $('.scanCode').addClass('configuration-show');
                $(".timeCustom").addClass('configuration-show');
                $(".holidays").addClass('configuration-show');
                $('.equipmentCustom').addClass('configuration-show');
                $('.ageGroup').addClass('configuration-show')
                $(".legal").addClass('configuration-show');
                $(".PeriodTime").addClass('configuration-show');
            　$(".layui-input-block input[type=radio]").each(function(index,item) {
                        $(this).prop('checked',false)
                　　　let　Value = $(this).val();
                        if(Value=='不限制'){
                            $(this).prop('checked',true)
                              form.render();
                        }
                　　　　
                　　})  
                form.render()
            } else if (data.value === '省市区') {
                $('.test2 ').removeClass('configuration-show');
                $('.cityLevel ').addClass('configuration-show');

            } else if (data.value === '城市线级') {
                $('.test2 ').addClass('configuration-show');
                $('.cityLevel ').removeClass('configuration-show');

            } else if (data.value === '客户划分预设') {
                $('.test2 ').addClass('configuration-show');
                $('.cityLevel ').addClass('configuration-show');
            } else if (data.value === '男') {

            } else if (data.value === '女') {

            } else if (data.value == '年龄段') {
                $('.ageCustom ').addClass('configuration-show');
                $('.ageGroup').removeClass('configuration-show')

            } else if (data.value == '年龄自定义') {
                $('.ageCustom ').removeClass('configuration-show');
                $('.ageGroup').addClass('configuration-show')


            } else if (data.value === 'wifi') {
                $('.wirelessCustomization ').addClass('configuration-show');
            } else if (data.value === '无线') {
                $('.wirelessCustomization ').addClass('configuration-show');
            } else if (data.value === '无线自定义') {
                $('.wirelessCustomization ').removeClass('configuration-show');
            } else if (data.value === '微信') {
                $('.scanCode').addClass('configuration-show');
            } else if (data.value === '支付宝') {
                $('.scanCode').addClass('configuration-show');
            } else if (data.value === '其他') {
                $('.scanCode').addClass('configuration-show');
            } else if (data.value === '扫码自定义') {
                $('.scanCode').removeClass('configuration-show');
            } else if (data.value === '时间段') {
                $(".timeCustom").addClass('configuration-show');
                $(".PeriodTime").removeClass('configuration-show');
            } else if (data.value === '时段自定义') {
                $(".timeCustom").removeClass('configuration-show');
                $(".PeriodTime").addClass('configuration-show');
            } else if (data.value === '法定') {
                $(".holidays").addClass('configuration-show');
                $(".legal").removeClass('configuration-show');
            } else if (data.value === '星期') {
                $(".holidays").removeClass('configuration-show');
                $(".legal").addClass('configuration-show');
            } else if (data.value === 'iOS') {
                $('.equipmentCustom').addClass('configuration-show');
            } else if (data.value === '安卓') {
                $('.equipmentCustom').addClass('configuration-show');
            } else if (data.value === '设备自定义') {
                $('.equipmentCustom').removeClass('configuration-show');
            }


        });
      
    });
    var ageArr=[{
        id: 1,
        label: '0-10',
        checked: false
    },
    {
        id: 2,
        label: '10-20',
        checked: false
    },
    {
        id: 3,
        label: '10-30',
        checked: false
    },
    {
        id: 4,
        label: '30-40',
        checked: false
    }
]
var timeArr=[{
    id: 1,
    label: '0点-10点',
    checked: false
},
{
    id: 2,
    label: '10点-20点',
    checked: false
},
{
    id: 3,
    label: '10点-30点',
    checked: false
},
{
    id: 4,
    label: '30点-40点',
    checked: false
}
]
//年龄段
  ageListArr()
    function ageListArr(){
        var str=''
        layui.use(['form', 'layer', 'slider'], function () {
            var form = layui.form;
        ageArr.forEach((item) => {
            var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
            str+=`<div class="layui-col-xs3 layui-col-sm3 layui-col-md3">
                <div class="areaList" data_item="${tempJsonStr}">
                    <div class="areaName">
                    ${item.label}
                    </div>
                    <div class="checkboxs">
                        <form class="layui-form" action=""
                            style='display:flex;'>
                            <input lay-filter="test" lay-skin="primary"
                                type="checkbox" value="" />
                        </form>
                    </div>

                    <div class="zhange"></div>
                </div>
            </div>`
        })
      
      $('#areContent').html(str)
      form.render()
      })
    }

     //年龄自定义
    ageListData(ageList)
    $('#ageTbody tr').find("input[name='minInput']").on('blur', function (e) {
        let minValue = e.target.value
        let maxValue = $(this).parent().parent().find("input[name='maxInput']").val()
        minMaxvalue(minValue, maxValue)
    })

    $('#ageTbody tr').find("input[name='maxInput']").on('blur', function (e) {
        let minValue = $(this).parent().parent().find("input[name='minInput']").val()
        let maxValue = e.target.value
        minMaxvalue(minValue, maxValue)
    })
    function minMaxvalue(a, b) {
        if (a && b) {
            if (Number(a) > Number(b)) {
                layer.msg('年龄最小值不能大于最大值');
                return
            }
        }
    }

      //年龄table ，添加，删除
    $('#tableAdd').on('click',function(){
        ageList.push( {
            id:'', 
            value1:'',
            value2:''
        })
        ageListData(ageList)
        form.render()
    })
  
    $('#ageTbody').on('click','.del',function(){
        let Index=$(this).parent().index()
       ageList.splice(Index,1);
       ageListData(ageList)
    })
    //年龄自定义Html
     function ageListData(ageList) {
            var str = ""
            ageList.forEach((item, index) => {
                var tempJsonStr=JSON.stringify(item)
             str += ` <tr data='${tempJsonStr}'>
                <td>${index+1}</td>
                <td>
                <input class='inputClass' type="text" placeholder="可输入年龄" style="padding-left:10px" name='minInput' maxlength="3" value = '${item.value1}' oninput = "value = value.replace(/[^0-9]/g,'')" autocomplete="off">
                </td>
                <td>
                <input  class='inputClass' type="text"  maxlength="3" style="padding-left:10px" autocomplete="off" name='maxInput'  value = '${item.value2}'  oninput = "value = value.replace(/[^0-9]/g,'')"   placeholder="可输入年龄" >
                </td>
                <td class="del">删除</td>
                </tr> `
            })
            $("#ageTbody").html(str)
        }

      //时段自定义Html
        function timeListData(timeList) {
            var str2 = ""
            timeList.forEach((item, index) => {
                var tempJsonStr=JSON.stringify(item)
                str2 += ` <tr data='${tempJsonStr}'>
                   <td>${index+1}</td>
                   <td>
                   <input class='inputClass' type="text" placeholder="可输入年龄" style="padding-left:10px" name='timeMinInput' maxlength="3" value = '${item.value1}' oninput = "value = value.replace(/[^0-9]/g,'')" autocomplete="off">
                   </td>
                   <td>
                   <input  class='inputClass' type="text"  maxlength="3" style="padding-left:10px" autocomplete="off" name='timeMaxInput'  value = '${item.value2}'  oninput = "value = value.replace(/[^0-9]/g,'')"   placeholder="可输入年龄" >
                   </td>
                   <td class="del">删除</td>
                   </tr> `
               })
               $("#timeTbody").html(str2)

        }
         //时段自定义
        timeListData(timeList) 
        $("#timeTbody  tr").find("input[name='timeMinInput']").on("blur",function(e){
         let maxValue=$(this).parent().parent().find("input[name='timeMaxInput']").val()
         let minValue = e.target.value
         minMaxvalue(minValue, maxValue)
        }) 
         //时段自定义 添加、删除
         $('#timeAdd').on('click',function(){
            timeList.push( {
                id:'', 
                value1:'',
                value2:''
            })
            timeListData(timeList)
            form.render()
        })
        $('#timeTbody').on('click','.del',function(){
            let Index=$(this).parent().index()
            timeList.splice(Index,1);
            timeListData(timeList)
        })
        $("#timeTbody  tr").find("input[name='timeMaxInput']").on("blur",function(e){
            let minValue=$(this).parent().parent().find("input[name='timeMinInput']").val()
            let maxValue = e.target.value
            minMaxvalue(minValue, maxValue)
           }) 
    $(".headers").on("click", function (e) {

        $('body,html').animate({ scrollTop: 0 }, 600, function () {
            $(".headers").css({
                'display': 'none'
            })
            $(".header").css({
                'display': 'block'
            })
        });
    })

//时间段
timeListArr()
function timeListArr(){
    var str=''
    layui.use(['form', 'layer', 'slider'], function () {
        var form = layui.form;
     timeArr.forEach((item) => {
        var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
        str+=`<div class="layui-col-xs3 layui-col-sm3 layui-col-md3">
            <div class="areaList" data_item="${tempJsonStr}">
                <div class="areaName">
                ${item.label}
                </div>
                <div class="checkboxs">
                    <form class="layui-form" action=""
                        style='display:flex;'>
                        <input lay-filter="test" lay-skin="primary"
                            type="checkbox" value="" />
                    </form>
                </div>

                <div class="zhange"></div>
            </div>
        </div>`
    })
  
  $('#timeContent').html(str)
  form.render()
  })
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

    var area = [{
        id: 1,
        parentId: 0,
        label: '华北',
        checked: false,
        checkName: false,

    },
    {
        id: 2,
        parentId: 0,
        label: '华南',
        checked: false,
        checkName: false,

    }
    ];
    var province = [
        {
            id: 3,
            parentId: 1,
            label: '北京',
            checked: true

        },
        {
            id: 4,
            parentId: 1,
            label: '广东',
            checked: false
        }];
    var province2 = [
        {
            id: 13,
            parentId: 2,
            label: '云南',
            checked: true

        },
        {
            id: 12,
            parentId: 2,
            label: '广西',
            checked: false


        },


    ]
    var city = [
        {
            parentId: 3,
            id: 15,
            label: '北京市',

        },
        {
            parentId: 3,
            id: 16,
            label: '广州',

        }


    ];
    var city2 = [
        {
            parentId: 4,
            id: 17,
            label: '上海',

        },
        {
            parentId: 4,
            id: 18,
            label: '杭州',

        }
    ]
    var county = [{
        parentId: 15,
        id: 7,
        label: '东城区',

    },
    {
        parentId: 15,
        id: 8,
        label: '黄埔区',

    }
    ]
    var country2 = [
        {
            parentId: 16,
            id: 10,
            label: '浙江',
        },
        {
            parentId: 16,
            id: 9,
            label: '四川',
        }
    ];
    var arr = [], arr2 = [], arr3 = [], arr4 = []
    areaStr(area) //初始化调用地区
    function areaStr(area, form) {
        var str = ''
        area.forEach((item, index) => {
            var tempJsonStr=JSON.stringify(item).replace(/\"/g,"'")
            str += `
                <div class="areaList first" data_id="${item.id}" data_item="${tempJsonStr}">
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

        $('#areaList').html(str)


        if (form) {
            form.render()
        }
    }
    function provinceStr(province) {//调用省
        var str = '';
        province.forEach((i) => {
            var tempJsonStr=JSON.stringify(i).replace(/\"/g,"'")
            str += `
                    <div class="areaList" province_id="${i.id}" provinceParentId='${i.parentId}' data_item="${tempJsonStr}">
                        <p class="areaName">${i.label}</p>
                        <div class='checkboxs'> 
                            <form class="layui-form area-form" action="" >
                                <div class="area-checkbox" > 
                                <input lay-filter="test2"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                    <div class="area-img"></div>
                                </div>
                        </form>
                        </div>
                    </div>`
        })
        $('#Province').html(str)
    }

    function cityStr(city) {//调用市
        var str = '';
        city.forEach((i) => {
            var tempJsonStr=JSON.stringify(i).replace(/\"/g,"'")
            str += `
            <div class="areaList" city_id="${i.id}" cityParentId='${i.parentId}' data_item="${tempJsonStr}">
            <p class="areaName">${i.label}</p>
            <div class='checkboxs'>
                <form class="layui-form area-form" action="" >
                    <div class="area-checkbox" > 
                        <input lay-filter="cityChecked"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                        <div class="area-img"></div>
                    </div>
              </form>
            </div>
            </div>`
        })
        $('#city').html(str)
    }

    function countyStr(county) {//调用县
        var str = '';
        county.forEach((i) => {
            var tempJsonStr=JSON.stringify(i).replace(/\"/g,"'")
            str += `
                    <div class="areaList" County_id="${i.id}" countyParentId='${i.parentId}' data_item="${tempJsonStr}">
                    <p class="areaName">${i.label}</p>
                    <div class='checkboxs'>
                            <form class="layui-form area-form" action="" >
                                <div class="area-checkbox"> 
                                    <input lay-filter="countryChecked"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                    <div class="area-img"></div>
                                </div>
                        </form>
                        </div>
                    </div>`
        })
        $('#County').html(str)
    }
  

    layui.use(['form', 'layer', 'slider'], function () {
        var form = layui.form;
        var slider = layui.slider;
        fuzzyQuery(form)
        provinceInverse(form)
        checkedToal(form)
        provinceSearch(form)
        citySearch(form)
        cityInverse(form)
        countrySearch(form)
        countryInverse(form)


    })
    fun()
    function fun() { //区域根据后台数据反显
        layui.use(['form', 'layer', 'jquery'], function () {
            var form = layui.form;
            $('#areaList>.areaList').each(function (index, item) {
                area.forEach((item, index) => {
                    if ($(this).find('.areaName').html() == item.label) {
                        if (item.checkName) {
                            $(this).find('.areaName').addClass('cur')
                        }
                        if (item.checked === '1') {
                            $(this).find(".area-img").addClass('is-indeterminate')
                        } else {
                            $(this).find("input[type='checkbox']").prop("checked", item.checked)

                            form.render()
                        }

                    }
                })
            })

        })
    }

    //区域筛选
    function fuzzyQuery(form) {
        areaStr(area)
        $("#areaSearch").on('input', function () {
            var str2 = ""
            var keyWord = $("#areaSearch").val();
            var areaArr = []
            area.forEach((item) => {
                var itemLable = item.label
                if (itemLable.indexOf(keyWord) > -1) {
                    areaArr.push(item)
                }

            })
            areaArr.forEach((i, index) => {
                str2 += `
                          <div class="areaList first" data_id="${i.id}">
                          <p class="areaName areaNames">${i.label}</p>
                            <div class='checkboxs'>
                            <form class="layui-form area-form" action="" >
                                <div class="area-checkbox" > 
                                    <input lay-filter="area"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                    <div class="area-img"></div>
                                </div>
                              </form>
                              </div>
                           </div>`
            })

            $('#areaList').html(str2)
            //区域选中与清空
            layui.areaChange()
            layui.setInvoiceInfo();
            form.render();
            checkedToal(form)
            fun()
        })

    }
    //省筛选
    function provinceSearch(form) {

        $("#provinceSearch").on('input', function () {
            let provinceData = localStorage.getItem('provinceData')
            let provinceDataArr = JSON.parse(provinceData)
            console.log(JSON.parse(provinceData));
            let provinceArr = []
            var str = ""
            var keyWord = $("#provinceSearch").val();
            provinceDataArr.forEach(item => {
                let provinceItem = item.label;
                if (provinceItem.indexOf(keyWord) > -1) {
                    provinceArr.push(item)
                }
            })
            provinceArr.forEach((i) => {
                str += `
                        <div class="areaList" province_id="${i.id}" provinceParentId='${i.parentId}'>
                            <p class="areaName">${i.label}</p>
                            <div class='checkboxs'> 
                                <form class="layui-form area-form" action="" >
                                    <div class="area-checkbox" > 
                                    <input lay-filter="test2"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                        <div class="area-img"></div>
                                    </div>
                            </form>
                            </div>
                        </div>`
            })
            $('#Province').html(str)
            // provinceInverse(form)
            form.render()
            functionCheckedToal(form)
        })
    }
    //省根据后台数据反显
    function provinceInverse(form) {
        $('#Province .areaList').each(function (index, item) {
            let provinceData = localStorage.getItem('provinceData')
            let provinceDataArr = JSON.parse(provinceData)
            provinceDataArr.forEach(item => {
                if ($(this).find(".areaName").html() == item.label) {
                    if (item.checkName) {
                        $(this).find('.areaName').addClass('cur')
                    }
                    if (item.checked === '1') {
                        $(this).find(".area-img").addClass("is-indeterminate")
                        form.render()
                    } else {
                        $(this).find("input[type='checkbox']").prop("checked", item.checked)
                        form.render()
                    }
                }
            })

        })

    }
    //市筛选
    function citySearch(form) {
        let cityData = localStorage.getItem('cityData')
        let cityDataArr = JSON.parse(cityData)
        $("#citySearch").on("input", function () {
            let cityArr = []
            var str = '';
            let keyWord = $("#citySearch").val()
            cityDataArr.forEach((item) => {
                let cityItem = item.label
                if (cityItem.indexOf(keyWord) > -1) {
                    cityArr.push(item)
                }
            })

            cityArr.forEach((i) => {
                str += `
            <div class="areaList" city_id="${i.id}" cityParentId='${i.parentId}'>
            <p class="areaName">${i.label}</p>
            <div class='checkboxs'>
                <form class="layui-form area-form" action="" >
                    <div class="area-checkbox" > 
                        <input lay-filter="cityChecked"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                        <div class="area-img"></div>
                    </div>
              </form>
            </div>
            </div>`
            })
            $('#city').html(str)
            cityInverse(form)

            form.render()

        })

    }
    //市根据后台数据反显
    function cityInverse(form) {
        $('#city .areaList').each(function (index, item) {
            let cityData = localStorage.getItem('cityData')
            let cityDataArr = JSON.parse(cityData)
            console.log(JSON.parse(cityData));
            cityDataArr.forEach(item => {
                if ($(this).find(".areaName").html() == item.label) {
                    if (item.checkName) {
                        $(this).find('.areaName').addClass('cur')
                    }
                    if (item.checked === "1") {
                        $(this).find(".area-img").addClass("is-indeterminate")

                    } else {
                        $(this).find("input[type='checkbox']").prop("checked", item.checked)
                        if ($("#areaList .areaList").attr("data_id") === $(this).attr("cityParentId")) {
                            $("#Province").find(".areaName").addClass("cur")
                        }
                        form.render()
                    }
                }
            })

        })
    }
    //县筛选
    function countrySearch(form) {
        let countryData = localStorage.getItem('countryData')
        let countryDataArr = JSON.parse(countryData)
        $("#countrySearch").on("input", function () {
            let countryArr = []
            var str = '';
            let keyWord = $("#countrySearch").val()
            countryDataArr.forEach(item => {
                let countryItem = item.label
                if (countryItem.indexOf(keyWord) > -1) {
                    countryArr.push(item)
                }
            })

            countryArr.forEach((i) => {
                str += `
                  <div class="areaList" County_id="${i.id}" countyParentId='${i.parentId}'>
                  <p class="areaName">${i.label}</p>
                  <div class='checkboxs'>
                          <form class="layui-form area-form" action="" >
                              <div class="area-checkbox"> 
                                  <input lay-filter="countryChecked"  lay-skin="primary" class="checkbox" type="checkbox" value=""/>
                                  <div class="area-img"></div>
                              </div>
                      </form>
                      </div>
                  </div>`
            })
            $('#County').html(str)
            countryInverse(form)
            form.render()
        })
    }
    //县根据后台数据反显
    function countryInverse(form) {
        let countryData = localStorage.getItem('countryData')
        let countryDataArr = JSON.parse(countryData)
        $('#County .areaList').each(function () {
            countryDataArr.forEach(item => {
                console.log(item);
                if ($(this).find(".areaName").html() == item.label) {
                    if (item.checkName) {
                        $(this).find('.areaName').addClass('cur')
                    }
                    if (item.checked === "1") {
                        $(this).find(".area-img").addClass("is-indeterminate")
                        form.render()
                    } else {
                        $(this).find("input[type='checkbox']").prop("checked", item.checked)
                        form.render()
                    }
                }
            })
        })
    }
 
    //区域选中的checkbox个数
    function checkedToal(form) {
        var chknum = $("#areaList").find("input[type='checkbox']:checked").length;//选中总个数
        var inputTotal = $("#areaList").find("input[type='checkbox']").length;//选项总数
        if (chknum == inputTotal&&inputTotal.length) {//全选
            // $(this).find(".area-img").addClass('is-indeterminate')
            $("#checkAll").find("input[type='checkbox']").prop("checked", true)

        } else {//不全选
            $("#checkAll").find("input[type='checkbox']").prop("checked", false)
        }
        form.render(); //渲染页面
    }
    //省选中的checkbox个数
    function functionCheckedToal(form) {
        var chknum = $("#Province").find("input[type='checkbox']:checked").length;//选项总个数
        var inputTotal = $("#Province").find("input[type='checkbox']").length;//选项总个数
        if (chknum == inputTotal && chknum > 0) {//全选
            $("#provinceAll").find("input[type='checkbox']").prop("checked", true)
            $("#Province").find(".area-img").removeClass('is-indeterminate')

        } else {//不全选
            $("#provinceAll").find("input[type='checkbox']").prop("checked", false)
        }
        form.render(); //渲染页面
    }
    //市选中的checkbox个数
    function cityToal(form) {
        var chknum = $("#city").find("input[type='checkbox']:checked").length;
        var inputTotal = $("#city").find("input[type='checkbox']").length;
        if (chknum == inputTotal && chknum > 0) {
            $("#city").find(".area-img").removeClass('is-indeterminate')
            $("#cityAll").find("input[type='checkbox']").prop("checked", true)
        } else {
            $("#cityAll").find("input[type='checkbox']").prop("checked", false)
        }
        form.render(); //渲染页面
    }
    //县选中的checkbox个数
    function countryTotal(form) {
        var chknum = $("#County").find("input[type='checkbox']:checked").length;
        var inputTotal = $("#County").find("input[type='checkbox']").length;
        if (chknum == inputTotal && chknum > 0) {
            $("#countyAll").find("input[type='checkbox']").prop("checked", true)
            $("#County").find(".area-img").removeClass('is-indeterminate')
        } else {
            $("#countyAll").find("input[type='checkbox']").prop("checked", false)
        }
        form.render(); //渲染页面
    }
    //暴露
    layui.define(['form', 'layer', 'jquery'], function (exports) {
        var form = layui.form;
        //在外部可以调用layui.use里的方法    //区域选中与清空
        exports('setInvoiceInfo', function (temp1, temp2) {//函数参数
            $('#areaList .areaList').on('click', '.areaName', function () {
                var aa = $("#areaList .areaList").attr("data_id")
                if ($(this).hasClass('cur')) {
                    $(this).removeClass("cur");
                    let Id = $(this).parent().attr("data_id")
                    let transtionArr = arr.filter(item => Id == item.parentId)
                    arr = arr.filter(item => !transtionArr.some(el => el.id == item.id))//清空
                    provinceStr(arr)
                    arr = []
                    cityStr(arr)
                    countyStr(arr)

                    form.render()

                } else {//选中
                    $(this).addClass("cur");
                    //父级index $(this).parent().index()
                    arr = arr.concat(province)
                    // console.log(11111,processConmon(arr,'label'))
                    arr =processConmon(arr,'label')
                    provinceStr(arr)
                    form.render(); //渲染页面
                }
            })
        });
        exports('areaChange', function (temp1, temp2) {
            $("#areaList .checkboxs").on('click', function () {

                let Id = $(this).parent().attr("data_id")
                if ($(this).find(".area-img").hasClass('is-indeterminate')) {
                    $(this).find(".area-img").removeClass('is-indeterminate')
                    $(this).find("input[type='checkbox']").prop('checked', true)
                    $('#Province>.areaList').each(function (index, item) {
                        if (Id == $(this).attr("provinceParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", true)
                            $("#County .areaList").find("input[type='checkbox']").prop('checked', true)
                            $("#city .areaList").find("input[type='checkbox']").prop('checked', true)
                            countryTotal(form)
                            cityToal(form)
                            form.render(); //渲染页面
                        }
                    })
                } else {
                    if (!$(this).find("input[type='checkbox']").prop('checked')) {
                        $(this).find("input[type='checkbox']").prop('checked', false)
                        $('#Province .areaList').each(function (index, item) {

                            if (Id == $(this).attr("provinceParentId")) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $("#County .areaList").find("input[type='checkbox']").prop('checked', false)
                                $("#city .areaList").find("input[type='checkbox']").prop('checked', false)
                                countryTotal(form)
                                cityToal(form)
                                form.render(); //渲染页面
                            }
                        })
                    } else {//选中
                        $(this).find("input[type='checkbox']").prop('checked', true)
                        $('#Province>.areaList').each(function (index, item) {
                            if (Id == $(this).attr("provinceParentId")) {
                                $(this).find("input[type='checkbox']").prop("checked", true)
                                $("#County .areaList").find("input[type='checkbox']").prop('checked', true)
                                $("#city .areaList").find("input[type='checkbox']").prop('checked', true)
                                countryTotal(form)
                                cityToal(form)
                                form.render(); //渲染页面
                            }
                        })

                    }
                }

                if ($('#Province .areaList').length) {//省有数据才显示省的全选
                    functionCheckedToal(form)
                }
                checkedToal(form)//地区全选
                countryTotal(form)
                cityToal(form)

            })
        })



    })
    layui.use(['form', 'layer', 'jquery'], function () {

        var form = layui.form;
        form.render()
        //区域选中与清空

        $('#areaList .areaList').on('click', '.areaName', function () {
            let Id = $(this).parent().attr("data_id")
            if ($(this).hasClass('cur')) {
                $(this).removeClass("cur");
                // let Id = $(this).parent().attr("data_id")
                let transtionArr = arr.filter(item => Id == item.parentId)
                // localStorage.setItem('provinceData',JSON.stringify(transtionArr))
                arr = arr.filter(item => !transtionArr.some(el => el.id == item.id))//清空
                provinceStr(arr)
                form.render()

            } else {//选中
                $(this).addClass("cur");
                //父级index $(this).parent().index()
                if ($(this).parent().index() > 0) {
                    arr = arr.concat(province2)
                } else {
                    arr = arr.concat(province)
                }
                arr =processConmon(arr,'label')
                localStorage.setItem('provinceData', JSON.stringify(arr))
                provinceStr(arr)
                $('#areaList .areaList').find(".area-img").removeClass('is-indeterminate')
                var that = this;
                getcheckedDom(that, Id, "#Province", "provinceParentId")
                form.render(); //渲染页面
            }

            arr2 = []
            arr3 = []
            cityStr(arr2)
            countyStr(arr3)
            functionCheckedToal(form)
            checkedToal(form)//地区全选
            countryTotal(form)
            cityToal(form)
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


        //省选中与清空
        $("#Province ").on("click", " .areaName", function () {
            let Id = $(this).parent().attr("province_id")
            if ($(this).hasClass('cur')) {
                $(this).removeClass('cur')
                let Id = $(this).parent().attr("province_id")
                let transtionArr = arr2.filter(item => Id == item.parentId)
                arr2 = arr2.filter(item => !transtionArr.some(el => el.id == item.id))//清空
                cityStr(arr2)

                form.render()
            } else {//选中
                $(this).addClass('cur')
                if ($(this).parent().index() > 0) {
                    arr2 = arr2.concat(city2)

                } else {
                    arr2 = arr2.concat(city)

                }
                arr2 =processConmon(arr2,'label')
                localStorage.setItem('cityData', JSON.stringify(arr2))
                cityStr(arr2)
                $('#Province .areaList').find(".area-img").removeClass('is-indeterminate')
                var that = this;
                getcheckedDom(that, Id, "#city", "cityParentId")
                form.render()
            }

            arr3 = []
            countyStr(arr3)
            functionCheckedToal(form)
            checkedToal(form)//地区全选
            countryTotal(form)
            cityToal(form)
        })

        //市选中与清空
        $("#city").on("click", ".areaName", function () {
            let Id = $(this).parent().attr("city_id")
            if ($(this).hasClass("cur")) {
                $(this).removeClass("cur")
                let Id = $(this).parent().attr("city_id")
                let cityArr = arr3.filter(item => Id == item.parentId)
                arr3 = arr3.filter(item => !cityArr.some(el => el.id == item.id))
                countyStr(arr3)

                form.render()
            } else {
                $(this).addClass('cur')
                if ($(this).parent().index() > 0) {
                    arr3 = arr3.concat(country2)
                } else {
                    arr3 = arr3.concat(county)
                }
                arr3 =processConmon(arr3,'label')
                localStorage.setItem('countryData', JSON.stringify(arr3))
                countyStr(arr3)
                $('#city .areaList').find(".area-img").removeClass('is-indeterminate')
                var that = this;
                getcheckedDom(that, Id, "#County", "countyParentId")
                form.render()
            }
            functionCheckedToal(form)
            checkedToal(form)//地区全选
            countryTotal(form)
            cityToal(form)
        })
        //区域---点击checkbox框
        areaChange()
        function areaChange() {
            $("#areaList .checkboxs").on('click', function () {
                console.log("area");
                let Id = $(this).parent().attr("data_id")
                if ($(this).find(".area-img").hasClass('is-indeterminate')) {
                    $(this).find(".area-img").removeClass('is-indeterminate')
                    $(this).find("input[type='checkbox']").prop('checked', true)
                    $('#Province>.areaList').each(function (index, item) {
                        let province_id = $(this).attr("province_id")
                        if (Id == $(this).attr("provinceParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", true)
                            $('#city >.areaList').each(function (index, item) {
                                let CityId = $(this).attr("city_id")
                                if (province_id == $(this).attr("cityParentId")) {
                                    $(this).find("input[type='checkbox']").prop("checked", true)
                                    $('#County >.areaList').each(function (index, item) {
                                        if (CityId == $(this).attr("countyParentId")) {
                                            $(this).find("input[type='checkbox']").prop("checked", true)

                                        }
                                    })
                                }
                            })
                            form.render(); //渲染页面
                        }
                    })
                } else {
                    if (!$(this).find("input[type='checkbox']").prop('checked')) {
                        $(this).find("input[type='checkbox']").prop('checked', false)
                        $('#Province .areaList').each(function (index, item) {
                            let province_id = $(this).attr("province_id")
                            if (Id == $(this).attr("provinceParentId")) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $('#city >.areaList').each(function (index, item) {
                                    if (province_id == $(this).attr("cityParentId")) {
                                        $(this).find("input[type='checkbox']").prop("checked", false)
                                        let CityId = $(this).attr("city_id")
                                        $('#County >.areaList').each(function (index, item) {
                                            if (CityId == $(this).attr("countyParentId")) {
                                                $(this).find("input[type='checkbox']").prop("checked", false)

                                            }
                                        })
                                    }
                                })
                                form.render(); //渲染页面
                            }
                        })
                    } else {//选中
                        console.log("选中");
                        $(this).find("input[type='checkbox']").prop('checked', true)
                        $('#Province>.areaList').each(function (index, item) {
                            if (Id == $(this).attr("provinceParentId")) {
                                let province_id = $(this).attr("province_id")
                                $(this).find("input[type='checkbox']").prop("checked", true)
                                $('#city >.areaList').each(function (index, item) {
                                    if (province_id == $(this).attr("cityParentId")) {
                                        $(this).find("input[type='checkbox']").prop("checked", true)
                                        let CityId = $(this).attr("city_id")
                                        $('#County >.areaList').each(function (index, item) {
                                            if (CityId == $(this).attr("countyParentId")) {
                                                $(this).find("input[type='checkbox']").prop("checked", true)

                                            }
                                        })
                                    }
                                })

                                form.render(); //渲染页面
                            }
                        })

                    }
                }

                if ($('#Province .areaList').length) {//省有数据才显示省的全选
                    functionCheckedToal(form)
                }
                checkedToal(form)//地区全选
                countryTotal(form)
                cityToal(form)

            })
        }
        //区域全选
        $("#checkAll").on('click', function () {
            areaCheckedAll()

            form.render();
        })
        //省全选
        $("#provinceAll").on('click', function () {
            provinceCheckedAll()
            console.log('provinceAll')
            form.render();
        })
        //市全选
        $("#cityAll").on('click', function () {
            cityCheckedAll()
            form.render();
        })
        //县全选
        $("#countyAll").on('click', function () {
            CountyCheckedAll()
            form.render();
        })
        //区域全选
        function areaCheckedAll() {
            $("#areaList").find(".area-img").removeClass('is-indeterminate')
            $("#Province").find(".area-img").removeClass('is-indeterminate')
            $("#city").find(".area-img").removeClass('is-indeterminate')
            $("#County").find(".area-img").removeClass('is-indeterminate')
            var areaChecked = $("#checkAll").find("input[type='checkbox']").prop('checked')
            $("#areaList >.areaList").each(function (index, item) {
                let dataID = $(this).attr('data_id')
                let hascur = $(this).find('.areaName').hasClass('cur')
                $(this).find("input[type='checkbox']").prop('checked', areaChecked)
                $("#Province .areaList").each(function (index, item) {
                    let Province_Id = $(this).attr('province_id')
                    let ProvinceHas = $(this).find('.areaName').hasClass('cur')
                    if (dataID == $(this).attr('provinceparentid') && hascur) {
                        $(this).find("input[type='checkbox']").prop('checked', areaChecked)
                        $("#city .areaList").each(function (index, item) {
                            let city_Id = $(this).attr('city_id')
                            let CityHas = $(this).find('.areaName').hasClass('cur')
                            if (Province_Id == $(this).attr('cityparentid') && ProvinceHas) {
                                $(this).find("input[type='checkbox']").prop('checked', areaChecked)
                                $("#County .areaList").each(function (index, item) {
                                    if (city_Id == $(this).attr('countyparentid') && CityHas) {
                                        $(this).find("input[type='checkbox']").prop('checked', areaChecked)
                                    }

                                })
                            }

                        })
                    }

                })
            })
            checkedToal(form)//地区全选
            countryTotal(form)
            cityToal(form)
            functionCheckedToal(form)
        }
        //省全选
        function provinceCheckedAll() {
            $("#areaList").find(".area-img").removeClass('is-indeterminate')
            $("#Province").find(".area-img").removeClass('is-indeterminate')
            $("#city").find(".area-img").removeClass('is-indeterminate')
            $("#County").find(".area-img").removeClass('is-indeterminate')
            var provinceChecked = $("#provinceAll").find("input[type='checkbox']").prop('checked')

            $("#Province >.areaList").each(function (index, item) {
                $(this).find("input[type='checkbox']").prop('checked', provinceChecked)
                let provinceparentid = $(this).attr('provinceparentid')
                let Province_Id = $(this).attr('province_id')
                let ProvinceHas = $(this).find('.areaName').hasClass('cur')
                $("#areaList >.areaList").each(function (index, item) {
                    let dataID = $(this).attr('data_id')
                    let hascur = $(this).find('.areaName').hasClass('cur')
                    if (dataID == provinceparentid && hascur) {
                        $(this).find("input[type='checkbox']").prop('checked', provinceChecked)
                    }
                })
                $("#city .areaList").each(function (index, item) {
                    let city_Id = $(this).attr('city_id')
                    let CityHas = $(this).find('.areaName').hasClass('cur')
                    if (Province_Id == $(this).attr('cityparentid') && ProvinceHas) {
                        $(this).find("input[type='checkbox']").prop('checked', provinceChecked)
                        $("#County .areaList").each(function (index, item) {
                            if (city_Id == $(this).attr('countyparentid') && CityHas) {
                                $(this).find("input[type='checkbox']").prop('checked', provinceChecked)
                            }

                        })
                    }

                })
            })
            checkedToal(form)//地区全选
            countryTotal(form)
            cityToal(form)
            functionCheckedToal(form)
        }
        //市全选
        function cityCheckedAll() {
            $("#areaList").find(".area-img").removeClass('is-indeterminate')
            $("#Province").find(".area-img").removeClass('is-indeterminate')
            $("#city").find(".area-img").removeClass('is-indeterminate')
            $("#County").find(".area-img").removeClass('is-indeterminate')
            var cityChecked = $("#cityAll").find("input[type='checkbox']").prop('checked')
            $("#city .areaList").each(function (index, item) {
                $(this).find("input[type='checkbox']").prop('checked', cityChecked)
                let cityparentid = $(this).attr('cityparentid')
                $("#Province >.areaList").each(function (index, item) {
                    let Provincehascur = $(this).find('.areaName').hasClass('cur')
                    if ($(this).attr('province_id') == cityparentid && Provincehascur) {
                        $(this).find("input[type='checkbox']").prop('checked', cityChecked)
                    }
                    let provinceparentid = $(this).attr('provinceparentid')
                    let province_id = $(this).attr('province_id')
                    $("#areaList >.areaList").each(function (index, item) {
                        let dataID = $(this).attr('data_id')
                        let hascur = $(this).find('.areaName').hasClass('cur')
                        if (dataID == provinceparentid && province_id == cityparentid && Provincehascur && hascur) {
                            $(this).find("input[type='checkbox']").prop('checked', cityChecked)
                        }
                    })
                })
                let city_Id = $(this).attr('city_id')
                let CityHas = $(this).find('.areaName').hasClass('cur')
                $("#County .areaList").each(function (index, item) {
                    if (city_Id == $(this).attr('countyparentid') && CityHas) {
                        $(this).find("input[type='checkbox']").prop('checked', cityChecked)
                    }

                })

            })

            checkedToal(form)//地区全选
            countryTotal(form)
            cityToal(form)
            functionCheckedToal(form)
        }
        //县全选
        function CountyCheckedAll() {
            $("#areaList").find(".area-img").removeClass('is-indeterminate')
            $("#Province").find(".area-img").removeClass('is-indeterminate')
            $("#city").find(".area-img").removeClass('is-indeterminate')
            $("#County").find(".area-img").removeClass('is-indeterminate')
            var CountyChecked = $("#countyAll").find("input[type='checkbox']").prop('checked')


            $("#County .areaList").each(function (index, item) {
                $(this).find("input[type='checkbox']").prop('checked', CountyChecked)
                let countyparentid = $(this).attr('countyparentid')
                $("#city .areaList").each(function (index, item) {
                    let CityHas = $(this).find('.areaName').hasClass('cur')
                    if (countyparentid == $(this).attr('city_id') && CityHas) {
                        $(this).find("input[type='checkbox']").prop('checked', CountyChecked)
                    }
                    let cityparentid = $(this).attr('cityparentid')
                    let city_id = $(this).attr('city_id')
                    $("#Province >.areaList").each(function (index, item) {
                        let Provincehascur = $(this).find('.areaName').hasClass('cur')
                        if ($(this).attr('province_id') == cityparentid && city_id == countyparentid && Provincehascur) {
                            $(this).find("input[type='checkbox']").prop('checked', CountyChecked)
                        }
                        let provinceparentid = $(this).attr('provinceparentid')
                        let province_id = $(this).attr('province_id')
                        $("#areaList >.areaList").each(function (index, item) {
                            let dataID = $(this).attr('data_id')
                            let hascur = $(this).find('.areaName').hasClass('cur')
                            if (dataID == provinceparentid && province_id == cityparentid && Provincehascur && hascur) {
                                $(this).find("input[type='checkbox']").prop('checked', CountyChecked)
                            }
                        })
                    })

                })
            })
            checkedToal(form)//地区全选
            countryTotal(form)
            cityToal(form)
            functionCheckedToal(form)

        }
        //点击省内checkbox
        $("#Province").on("click", '.area-checkbox', function () {
            console.log("province");
            let Id2 = $(this).parent().parent().parent().attr("province_id")
            let Id = $(this).parent().parent().parent().attr("provinceParentId")
            var aa = `#Province .areaList[provinceParentId='${Id}']`//数据里面含有多个parentId时获取对应Id数据的数量
            var classLength = $(aa).find("input[type='checkbox']:checked").length//每个parentId选项总个数
            if ($(this).find(".area-img").hasClass('is-indeterminate')) {
                $(this).find(".area-img").removeClass('is-indeterminate')
                $(this).find("input[type='checkbox']").prop('checked', true)
                $('#city >.areaList').each(function (index, item) {
                    if (Id2 == $(this).attr("cityParentId")) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        let CityId = $(this).attr("city_id")
                        $('#County >.areaList').each(function (index, item) {
                            if (CityId == $(this).attr("countyParentId")) {
                                $(this).find("input[type='checkbox']").prop("checked", true)

                            }
                        })
                        form.render(); //渲染页面
                    }
                })
                classLength = $(aa).find("input[type='checkbox']:checked").length;
            } else {
                if (!$(this).find("input[type='checkbox']").prop("checked")) {
                    $(this).find("input[type='checkbox']").prop("checked", false)
                    $('#city >.areaList').each(function (index, item) {

                        if (Id2 == $(this).attr("cityParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", false)
                            let CityId = $(this).attr("city_id")
                            $('#County >.areaList').each(function (index, item) {
                                if (CityId == $(this).attr("countyParentId")) {
                                    $(this).find("input[type='checkbox']").prop("checked", false)

                                }
                            })
                            form.render(); //渲染页面
                        }
                    })

                } else {
                    $(this).find("input[type='checkbox']").prop("checked", true)
                    $('#city >.areaList').each(function (index, item) {

                        if (Id2 == $(this).attr("cityParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", true)
                            let CityId = $(this).attr("city_id")
                            $('#County >.areaList').each(function (index, item) {
                                if (CityId == $(this).attr("countyParentId")) {
                                    $(this).find("input[type='checkbox']").prop("checked", true)

                                }
                            })
                            form.render(); //渲染页面
                        }
                    })
                }
            }
            $('#areaList >.areaList').each(function (index, item) {
                if (Id == $(this).attr("data_id")) {
                    if (classLength == $(aa).length) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        $(this).find(".area-img").removeClass('is-indeterminate')
                    } else if (classLength > 0 && classLength < $(aa).length) {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").addClass('is-indeterminate')
                        form.render(); //渲染页面
                    } else {
                        $(this).find(".area-img").removeClass('is-indeterminate')
                        $(this).find("input[type='checkbox']").prop("checked", false)
                    }
                    checkedToal(form)

                }

            })

            if ($('#city .areaList').length) {//省有数据才显示省的全选
                cityToal(form)
                countryTotal(form)
            }
            Id2 = ''

            checkedToal(form)//地区全选
            functionCheckedToal(form)

        })

        //点击市内checkbox
        $("#city").on("click", '.area-checkbox', function () {
            console.log("city");
            let Id = $(this).parent().parent().parent().attr("cityParentId")
            let Id2 = $(this).parent().parent().parent().attr("city_id")
            let cityId = `#city .areaList[cityParentId='${Id}']`
            var classLength = $(cityId).find("input[type='checkbox']:checked").length;
            if ($(this).find(".area-img").hasClass('is-indeterminate')) {
                $(this).find(".area-img").removeClass('is-indeterminate')
                $(this).find("input[type='checkbox']").prop('checked', true)
                $('#County >.areaList').each(function (index, item) {
                    if (Id2 == $(this).attr("countyParentId")) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        form.render(); //渲染页面
                    }
                })
                classLength = $(cityId).find("input[type='checkbox']:checked").length;
            } else {
                if (!$(this).find("input[type='checkbox']").prop("checked")) {
                    $(this).find("input[type='checkbox']").prop("checked", false)
                    $('#County >.areaList').each(function (index, item) {

                        if (Id2 == $(this).attr("countyParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", false)
                            form.render(); //渲染页面
                        }
                    })
                } else {
                    $(this).find("input[type='checkbox']").prop("checked", true)
                    $('#County >.areaList').each(function (index, item) {
                        if (Id2 == $(this).attr("countyParentId")) {
                            $(this).find("input[type='checkbox']").prop("checked", true)
                            form.render(); //渲染页面
                        }
                    })
                }
            }

            $("#Province >.areaList").each(function (index, item) {
                let provinceId = $(this).attr("provinceparentid")
                let Province = `#Province .areaList[provinceparentid=${provinceId}]`
                var ProvinceLength = $(Province).find("input[type='checkbox']:checked").length;
                if (Id == $(this).attr("province_id")) {
                    if (classLength == $(cityId).length) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        $(this).find(".area-img").removeClass('is-indeterminate')
                        Province = `#Province .areaList[provinceparentid=${provinceId}]`
                        ProvinceLength = $(Province).find("input[type='checkbox']:checked").length;
                        $("#areaList >.areaList").each(function (index, item) {
                            if (provinceId == $(this).attr("data_id") && ProvinceLength == $(Province).length) {
                                $(this).find("input[type='checkbox']").prop("checked", true)
                                $(this).find(".area-img").removeClass('is-indeterminate')
                            }
                        })
                    } else if (classLength > 0 && classLength < $(cityId).length) {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").addClass('is-indeterminate')
                        $("#areaList >.areaList").each(function (index, item) {
                            if (provinceId == $(this).attr("data_id")) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $(this).find(".area-img").addClass('is-indeterminate')
                            }
                        })
                        form.render();
                    } else if (classLength == 0) {
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").removeClass('is-indeterminate')
                        $("#areaList >.areaList").each(function (index, item) {
                            if (provinceId == $(this).attr("data_id") && ProvinceLength == 0) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $(this).find(".area-img").removeClass('is-indeterminate')
                            }
                        })
                    }
                }
            })


            checkedToal(form)//地区全选
            cityToal(form)
            functionCheckedToal(form)
            countryTotal(form)

            Id2 = ''
        })

        //县的checkbox监听
        $("#County").on("click", '.area-checkbox', function () {
            console.log("County");
            let Id = $(this).parent().parent().parent().attr("countyParentId")
            let countryId = `#County .areaList[countyParentId=${Id}]`
            var classLength = $(countryId).find("input[type='checkbox']:checked").length;
            $("#city >.areaList").each(function (index, item) {
                console.log("County3");
                var city_id = $(this).attr("cityparentid")
                let qq = `#city .areaList[cityparentid=${city_id}]`
                var qqLength = $(qq).find("input[type='checkbox']:checked").length;
                $(this).find(".area-img").removeClass('is-indeterminate')
                if (Id == $(this).attr("city_id")) {
                    if (classLength == $(countryId).length) {
                        $(this).find("input[type='checkbox']").prop("checked", true)
                        $(this).find(".area-img").removeClass('is-indeterminate')
                        let cityId = `#city .areaList[cityparentid=${city_id}]`//重新获取数量
                        var qqLengthId = $(cityId).find("input[type='checkbox']:checked").length;
                        if (qqLengthId == $(cityId).length) {
                            $("#Province >.areaList").each(function (index, item) {
                                if (city_id == $(this).attr("province_id")) {
                                    $(this).find("input[type='checkbox']").prop("checked", true)
                                    $(this).find(".area-img").removeClass('is-indeterminate')
                                    let provinceId = $(this).attr("provinceparentid")
                                    let provinceparentId = `#Province .areaList[provinceparentid=${provinceId}]`//重新获取数量
                                    var ProvinceLength = $(provinceparentId).find("input[type='checkbox']:checked").length;
                                    console.log(ProvinceLength, $(provinceparentId).length)
                                    if (ProvinceLength == $(provinceparentId).length) {
                                        $("#areaList >.areaList").each(function (index, item) {
                                            if (provinceId == $(this).attr("data_id")) {
                                                $(this).find("input[type='checkbox']").prop("checked", true)
                                                $(this).find(".area-img").removeClass('is-indeterminate')
                                            }
                                        })
                                    }

                                }
                            })
                        }
                    } else if (classLength > 0 && classLength < $(countryId).length) {
                        console.log("County2");
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").addClass('is-indeterminate')
                        $("#Province >.areaList").each(function (index, item) {
                            if (city_id == $(this).attr("province_id")) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $(this).find(".area-img").addClass('is-indeterminate')
                                let provinceId = $(this).attr("provinceparentid")
                                $("#areaList >.areaList").each(function (index, item) {
                                    if (provinceId == $(this).attr("data_id")) {
                                        $(this).find("input[type='checkbox']").prop("checked", false)
                                        $(this).find(".area-img").addClass('is-indeterminate')
                                    }
                                })
                            }
                            form.render();
                        })
                    } else {
                        console.log("County1");
                        $(this).find("input[type='checkbox']").prop("checked", false)
                        $(this).find(".area-img").removeClass('is-indeterminate')
                        $("#Province >.areaList").each(function (index, item) {
                            let provinceparentid = $(this).attr("provinceparentid")
                            let Province = `#Province .areaList[provinceparentid=${provinceparentid}]`
                            var ProvinceLength = $(Province).find("input[type='checkbox']:checked").length;
                            if (city_id == $(this).attr("province_id") && qqLength == 0) {
                                $(this).find("input[type='checkbox']").prop("checked", false)
                                $(this).find(".area-img").removeClass('is-indeterminate')
                                $("#areaList >.areaList").each(function (index, item) {
                                    if (provinceparentid == $(this).attr("data_id") && ProvinceLength == 0) {
                                        $(this).find("input[type='checkbox']").prop("checked", false)
                                        $(this).find(".area-img").removeClass('is-indeterminate')
                                    }
                                })
                            }
                            form.render();
                        })
                    }
                    cityToal(form)
                }
            })
            checkedToal(form)//地区全选
            countryTotal(form)
            cityToal(form)
            functionCheckedToal(form)
        });
    });
  














// 　$(".layui-input-block input[type=radio]").each(function() {
//     　　　let　itemValue = $(this).val();
//             if(Value=='省市区'){
//                 $(this).attr('checked',true)
//                     $('.test2 ').removeClass('configuration-show');
//                     $('.cityLevel ').addClass('configuration-show');
//             }
//     　　　　
//     　　})

//table内HTML转化动态数据 
function funTableData(DomId,min,max){
    let arr=[], ObjList={} 
    $(DomId+' tr').each(function (index, item) {
        ObjList=JSON.parse($(this).context.attributes.data.value)
        ObjList.value1=$(this).find(min).val();
        ObjList.value2=$(this).find(max).val()
       arr.push(ObjList)
       })
       return  arr
}
//年龄段有HTML转化动态数据
function funagesData(DomId){
    let arr=[], ObjList={} 
    $(DomId +' .areaList').each(function (index, item) {
        ObjList=eval('(' + $(this).attr('data_item') + ')')
           ObjList.checked=$(this).find("input[type='checkbox']").prop("checked")
       arr.push(ObjList)
       })
       return  arr
}  
//有HTML转化动态数据
function funData(DomId){
    let arr=[], ObjList={} 
    $(DomId+' .areaList').each(function (index, item) {
        ObjList=eval('(' + $(this).attr('data_item') + ')')
            if ($(this).find('.areaName').hasClass('cur')) {
                ObjList.checkName=true
            }else{
                ObjList.checkName=false
            }
            if ($(this).find(".area-img").hasClass('is-indeterminate')) {
                ObjList.checked = '1'
            } else {
                ObjList.checked=$(this).find("input[type='checkbox']").prop("checked")
            }
             
       arr.push(ObjList)
       })
       return  arr
}
    $('#btnSave').on('click',function(){
        let Obj={};
       
        　$(".layui-input-block input[type=radio]:checked").each(function() {
            　　　let　Value = $(this).val();
            　if (Value === '不限制') {
                Obj.areaRestriction=Value

            } else if (Value === '省市区') {
                Obj.proRestriction=Value
                Obj.areaList=funData('#areaList')
                Obj.provinceList=funData('#Province')
                Obj.cityList=funData('#city')
                Obj.CountyList=funData('#County')
               
            } else if (Value === '城市线级') {
                Obj.proRestriction=Value
                Obj.cityLinesList=funData('#cityLines')
                Obj.lineCityList=funData('#lineCity')
                Obj.lineCountysList=funData('#lineCountys')
                
            } else if (Value === '客户划分预设') {
                Obj.proRestriction=Value
            } else if (Value === '男') {
                Obj.sex=Value
            } else if (Value === '女') {
                Obj.sex=Value
            } else if (Value == '年龄段') {
                Obj.agevalue=Value
                Obj.agesList= funagesData('#areContent')
              
            } else if (Value == '年龄自定义') {
                Obj.agevalue=Value
                Obj.ageList= funTableData('#ageTbody',"input[name='minInput']","input[name='maxInput']")
                
            } else if (Value === 'wifi') {
                Obj.wifiValue=Value
            } else if (Value=== '无线') {
                Obj.wifiValue=Value
            } else if (Value === '无线自定义') {
                Obj.wifiValue=Value
                Obj.newWorkList=funData('#newWorkList')
                Obj.erjiList=funData('#erjiList')
                
            } else if (Value === '微信') {
                Obj.Networking=Value
            } else if (Value === '支付宝') {
                Obj.Networking=Value
            } else if (Value === '其他') {
                Obj.Networking=Value
            } else if (Value === '扫码自定义') {
                Obj.Networking=Value
                Obj.scanFirstList=funData('#scanFirstList')
                Obj.scanSecList=funData('#scanSecList')
            } else if (Value === '时间段') {
                Obj.timeValue=Value
                Obj.agesList= funagesData('#timeContent')
            } else if (Value === '时段自定义') {
                Obj.timeValue=Value
                Obj.timeList= funTableData("#timeTbody","input[name='timeMinInput']","input[name='timeMaxInput']")
            } else if (Value === '法定') {
                Obj.weekValue=Value
                Obj.legalList=funData('#legalList')
            } else if (Value === '星期') {
                Obj.weekValue=Value
                Obj.weekList=funData('#weekList')
            } else if (Value === 'iOS') {
                Obj.resionValue=Value
            } else if (Value === '安卓') {
                Obj.resionValue=Value
            } else if (Value=== '设备自定义') {
                Obj.resionValue=Value
                Obj.equipmentFirstList=funData('#equipmentFirstList')
                Obj.equipmentSecondList=funData('#equipmentSecondList')
            }

       }) 
            console.log(Obj)
    })



})
