// 对项目中与用户操作有关的请求
var user = {



    login: function (options) {

        $.ajax({
            type: "post",
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password


            },
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);

                }
                else {
                    options.fail(res);

                }





            }






        })




    },

    logout: function (options) {

        $.ajax({
            type: "post",
            url: LOGOUT,
            success: function (res) {
                if (res.code === 200) {
                    options.success();

                } else {

                    options.fail();
                }




            }



        })





    },




    name: function (options) {
        $.ajax({

            url: ADMIN,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res);
                    // console.log(res);



                } else {


                    options.fail(res);
                }



            }





        })



    },



    gettingdata: function (options) {


        $.ajax({
            url: "http://localhost:8000/admin/category_search",
            success: function (res) {
                if (res.code === 200) {
                    // 1.2模板字符串
                    options.success(res)

                }

            }




        })










    },



    newdata: function (options) {


        $.ajax({
            type: "POST",
            url: "http://localhost:8000/admin/category_add",
            data: options.data,
            success: function (res) {
                console.log(res);

                options.success(res)


            }

        })



    },




    // 编辑

    compile: function (options) {


        $.ajax({
            type: "POST",
            url: "http://localhost:8000/admin/category_edit",
            data: options.data,
            success: function (res) {
                options.success();


            }
        })




    },
    // 删除
    deleta: function (options) {


        $.ajax({
            type: "POST",
            url: "http://localhost:8000/admin/category_delete",
            data: options.data,


            success: function (res) {
                // console.log(res);


                options.success(res)
            }


        })




    }



}
