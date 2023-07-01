# Polygon Editor

run `./run.sh {APP_NAME}` 
to start running the app locally within a docker container. 

This is a proof of concept for replicate Polyline selection tool seen in many popular softwares like Photoshop and [Clip Paint Studio](https://support.clip-studio.com/en-us/faq/articles/20200023). 

Clicking on the Canvas generates markers at that location. Your initial click generates a marker and the following ones will have a straight line segment connected to the previous marker. Once the lastest marker reaches a certain vicinity of the initial marker, a polygon will be formed, masking the region.

See follow for an example:

### Prior to Connecting the Points
![Screenshot from 2023-06-29 00-04-34](https://github.com/houchongchan/PolygonEditor/assets/30061766/f5fb0100-5c3f-4c7e-a276-d938d58ea577)


### After to Connecting the Points
![Screenshot from 2023-06-29 00-12-26](https://github.com/houchongchan/PolygonEditor/assets/30061766/45936ba5-96dd-4bf3-9565-048e3e70af8c)


