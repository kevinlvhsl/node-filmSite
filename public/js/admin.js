$(function(){
	alert(1)
	$('.del').click(function(e){
		var target = $(e.target)
		var id = target.data('id')
		var tr = $('.item-id-'+id)
		if(confirm('你确定要删除这条记录？'))
		$.ajax({
			type: 'DELETE',
			url: '/admin/list?id='+id
		}).done(function(results){
			if (results.success === 1) {
				if (tr.length > 0) {
					tr.remove()
				}
			}
		})
		
	})
})