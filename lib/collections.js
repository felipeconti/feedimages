// FS.debug = true;

var imageStore = new FS.Store.FileSystem("images", {path: "~/feedImages"})

Images = new FS.Collection("images", {
	stores: [imageStore]
});
