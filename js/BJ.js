            function  add()
            {
                var content=$("te").value;
                content=trim(content);
                if(content.length<1)
                {
                    alert("请输入内容");
                    return;
                }
                $("te").value="";
                var myDate = new Date();
                var year=myDate.getFullYear();    //获取完整的年份(4位,1970-????)
                var month=myDate.getMonth();       //获取当前月份(0-11,0代表1月)
                var day=myDate.getDate();  
                var hour=myDate.getHours();       //获取当前小时数(0-23)
                var second=myDate.getMinutes();     //获取当前分钟数(0-59)
                var minute=myDate.getSeconds();
                var timeNow=year+"/"+month+"/"+day+" --"+hour+":"+second+":"+minute;                
                var  w="<pre  style='display:inline;'>"+timeNow+"<br/>"+content+"</pre>";                       
                var newDiv=document.createElement("div");
                newDiv.className="personal";
                newDiv.innerHTML=w;
                var s=$("show");
                $("show").appendChild(newDiv);
                s.scrollTop = s.scrollHeight;//自动将滚动条拉到底部
                            }
        function $(id){
            return document.getElementById(id);
        }
        function trim(str){ //删除左右两端的空格
　　     return str.replace(/(^\s*)|(\s*$)/g, "");
　　 }