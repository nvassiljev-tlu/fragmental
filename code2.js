gdjs.PhotoCloseUpSceneCode = {};
gdjs.PhotoCloseUpSceneCode.localVariables = [];
gdjs.PhotoCloseUpSceneCode.idToCallbackMap = new Map();
gdjs.PhotoCloseUpSceneCode.GDPhotoCloseUpObjects1= [];
gdjs.PhotoCloseUpSceneCode.GDPhotoCloseUpObjects2= [];
gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1= [];
gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects2= [];
gdjs.PhotoCloseUpSceneCode.GDclickableObjects1= [];
gdjs.PhotoCloseUpSceneCode.GDclickableObjects2= [];
gdjs.PhotoCloseUpSceneCode.GDInventoryPNGObjects1= [];
gdjs.PhotoCloseUpSceneCode.GDInventoryPNGObjects2= [];
gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects1= [];
gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects2= [];
gdjs.PhotoCloseUpSceneCode.GDBackArrowObjects1= [];
gdjs.PhotoCloseUpSceneCode.GDBackArrowObjects2= [];


gdjs.PhotoCloseUpSceneCode.mapOfGDgdjs_9546PhotoCloseUpSceneCode_9546GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.PhotoCloseUpSceneCode.GDclickableObjects1});
gdjs.PhotoCloseUpSceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.PhotoCloseUpSceneCode.GDclickableObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PhotoCloseUpSceneCode.GDclickableObjects1.length;i<l;++i) {
    if ( gdjs.PhotoCloseUpSceneCode.GDclickableObjects1[i].getVariableString(gdjs.PhotoCloseUpSceneCode.GDclickableObjects1[i].getVariables().getFromIndex(0)) == "firstPartPhoto" ) {
        isConditionTrue_0 = true;
        gdjs.PhotoCloseUpSceneCode.GDclickableObjects1[k] = gdjs.PhotoCloseUpSceneCode.GDclickableObjects1[i];
        ++k;
    }
}
gdjs.PhotoCloseUpSceneCode.GDclickableObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1stPartPhoto"), gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1);
{for(var i = 0, len = gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1.length ;i < len;++i) {
    gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


};gdjs.PhotoCloseUpSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextArrow"), gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "click");
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UILayout", 0, 0, 0);
}
{for(var i = 0, len = gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects1.length ;i < len;++i) {
    gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_1stPartPhoto"), gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1);
{for(var i = 0, len = gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1.length ;i < len;++i) {
    gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.PhotoCloseUpSceneCode.GDclickableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PhotoCloseUpSceneCode.mapOfGDgdjs_9546PhotoCloseUpSceneCode_9546GDclickableObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.PhotoCloseUpSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.PhotoCloseUpSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PhotoCloseUpSceneCode.GDPhotoCloseUpObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDPhotoCloseUpObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GDclickableObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDclickableObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GDInventoryPNGObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDInventoryPNGObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GDBackArrowObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDBackArrowObjects2.length = 0;

gdjs.PhotoCloseUpSceneCode.eventsList1(runtimeScene);
gdjs.PhotoCloseUpSceneCode.GDPhotoCloseUpObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDPhotoCloseUpObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GD_95951stPartPhotoObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GDclickableObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDclickableObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GDInventoryPNGObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDInventoryPNGObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDNextArrowObjects2.length = 0;
gdjs.PhotoCloseUpSceneCode.GDBackArrowObjects1.length = 0;
gdjs.PhotoCloseUpSceneCode.GDBackArrowObjects2.length = 0;


return;

}

gdjs['PhotoCloseUpSceneCode'] = gdjs.PhotoCloseUpSceneCode;
