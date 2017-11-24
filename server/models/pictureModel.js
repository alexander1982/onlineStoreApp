let mongoose = require('mongoose');
let path = require('path');
let filePluginlLib = require('mongoose-file');
let filePlugin = filePluginlLib.filePlugin;
let make_upload_to_model = filePluginlLib.make_upload_to_model;

let uploads_base = path.join(__dirname, "./uploads");
let uploads = path.join(uploads_base, "./u");

let PictureSchema = new mongoose.Schema({
	title: String
});

PictureSchema.plugin(filePlugin, {
	name: "image",
	inline: false,
	save: true,
	upload_to: make_upload_to_model(uploads, 'photos'),
	relative_to: uploads_base
});

let Picture = mongoose.model('Picture', PictureSchema);

module.exports = {Picture};