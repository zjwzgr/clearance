    //查询计算样式
    function getStyle(obj,prop){
		if(window.getComputedStyle){
			return window.getComputedStyle(obj,false)[prop];
		}
		else{
			return obj.currentStyle[prop];
		}
	}


	//绑定事件*
	function addEvent(elem,type,fun){
		if(elem.addEventListener){
			elem.addEventListener(type,fun,false);
		}
		else if(elem.attachEvent){
			elem.attachEvent('on'+type,function(){fun.call(elem);});
		}
		else{
			elem['on'+ type] = fun;
		}
	}

	//解除绑定事件
	function removeEvent(elem,type,fun){
		if(elem.removeEventListener){
			elem.removeEventListener(type,fun,false);
		}
		else if(elem.detachEvent){
			elem.detachEvent('on'+type,fun);
		}
		else{
			elem['on'+ type] = null;
		}
	}

	//取消冒泡*
	function stopBubble(e){
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancleBubble = true;
		}
	}

	//阻止默认事件*
	function cancelHandler(e){
		if(e.preventDefault){
			e.preventDefault();
		}else{
			e.returnValue =false;
		}
	}

	//查询事件源*
	// ul.onclick = function(e){
	// 	var event = e || window.event;
	// 	var target = event.target || event.srcElement;
	// 	console.log(target);
	// }