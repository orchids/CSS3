var postFile = {
	init: function(){
		var t = this;
		t.regional = document.getElementById('label');
		t.getImage = document.getElementById('get_image');
		t.editPic = document.getElementById('edit_pic');
		t.editBox = document.getElementById('cover_box');
		t.px = 0;
		t.py = 0;
		t.sx = 15;
		t.sy = 15;
		t.sHeight = 150;
		t.sWidth = 150;
		document.getElementById('post_file').addEventListener('change', t.handleFiles, false);
	},

	handleFiles: function() {
	var fileList = this.files[0];
	var oFReader = new FileReader();
	oFReader.readAsDataURL(fileList);
	oFReader.onload = function(oFREvent){
		postFile.paintImage(oFREvent.target.result);
	};
},

}


console.log(this.files);