$(function () {
    setTimeout(ajaxModifyQuery,"100");
  function ajaxModifyQuery() {	
	$.ajax({
		url : "/CustomerInfo/update/" + $("#customerInfo_customerId_modify").val(),
		type : "get",
		data : {
			//customerId : $("#customerInfo_customerId_modify").val(),
		},
		beforeSend : function () {
			$.messager.progress({
				text : "正在获取中...",
			});
		},
		success : function (customerInfo, response, status) {
			$.messager.progress("close");
			if (customerInfo) { 
				$("#customerInfo_customerId_modify").val(customerInfo.customerId);
				$("#customerInfo_customerId_modify").validatebox({
					required : true,
					missingMessage : "请输入客户编号",
					editable: false
				});
				$("#customerInfo_customerName_modify").val(customerInfo.customerName);
				$("#customerInfo_customerName_modify").validatebox({
					required : true,
					missingMessage : "请输入客户名称",
				});
				$("#customerInfo_personName_modify").val(customerInfo.personName);
				$("#customerInfo_personName_modify").validatebox({
					required : true,
					missingMessage : "请输入联系人",
				});
				$("#customerInfo_telephone_modify").val(customerInfo.telephone);
				$("#customerInfo_telephone_modify").validatebox({
					required : true,
					missingMessage : "请输入联系电话",
				});
				$("#customerInfo_address_modify").val(customerInfo.address);
			} else {
				$.messager.alert("获取失败！", "未知错误导致失败，请重试！", "warning");
				$(".messager-window").css("z-index",10000);
			}
		}
	});

  }

	$("#customerInfoModifyButton").click(function(){ 
		if ($("#customerInfoModifyForm").form("validate")) {
			$("#customerInfoModifyForm").form({
			    url:"CustomerInfo/update/" + $("#customerInfo_customerId_modify").val(),
			    onSubmit: function(){
					if($("#customerInfoEditForm").form("validate"))  {
	                	$.messager.progress({
							text : "正在提交数据中...",
						});
	                	return true;
	                } else {
	                    return false;
	                }
			    },
			    success:function(data){
			    	$.messager.progress("close");
                	var obj = jQuery.parseJSON(data);
                    if(obj.success){
                        $.messager.alert("消息","信息修改成功！");
                        $(".messager-window").css("z-index",10000);
                        //location.href="frontlist";
                    }else{
                        $.messager.alert("消息",obj.message);
                        $(".messager-window").css("z-index",10000);
                    } 
			    }
			});
			//提交表单
			$("#customerInfoModifyForm").submit();
		} else {
			$.messager.alert("错误提示","你输入的信息还有错误！","warning");
			$(".messager-window").css("z-index",10000);
		}
	});
});
