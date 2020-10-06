

### yolo darknet training pipeline:

* annotate large images
* copy images to new location
* rescale images
* reformat annotations
* create data files

### bounding box formats

rectlabel
* notation (pixel): xmin, ymin, xmax, ymax;
* orego: top left

darknet
* notation (relative): class-index, xcentre, ycentre, width, height
* oreo: top left

