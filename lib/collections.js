// FS.debug = true;

var createThumb = function(fileObj, readStream, writeStream) {
	// Transform the image into a 10x10px thumbnail
	gm(readStream, fileObj.name()).resize('100', '100').stream().pipe(writeStream);
};

Images = new FS.Collection("images", {
	stores: [
		new FS.Store.FileSystem("thumbs", {path: "~/feedImages/thumb", transformWrite: createThumb }),
		new FS.Store.FileSystem("images", {path: "~/feedImages/full"})
	],
	filter: {
		allow: {
			contentTypes: ['image/*'] //allow only images in this FS.Collection
		}
	}
});
