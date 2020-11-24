

### yolo darknet training pipeline:

* annotate large images
* copy images to new location
* rescale images
* reformat annotations
* create data files

### bounding box formats

rectlabel
* notation (pixel): xmin, ymin, xmax, ymax;
* origin: top left

darknet
* notation (relative): class-index, xcentre, ycentre, width, height
* origin: top left

### how-to run with darknet

1. clone and make darknet in dir over set-solver (https://pjreddie.com/darknet/install/)

2. copy pretrained weights from yolo website (guide: https://pjreddie.com/darknet/yolov2/, weights: https://pjreddie.com/darknet/imagenet/#darknet19_448)

3. run ./darknet detector train ../set-solver/yolo/set.data cfg/yolov2.cfg darknet19_448.conv.23

4. wait untill atleast iteration 100 before quitting to save the progress

5. test with ./darknet detect cfg/yolov2.cfg backup/<weights> <some-set-image>

### this, its the plan

* configure cloud server for training
* mvp object detector with darknet/yolo
* try implement cnn with mobile net
* make the app
* win set-game





