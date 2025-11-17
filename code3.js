gdjs.TableCloseUpSceneCode = {};
gdjs.TableCloseUpSceneCode.localVariables = [];
gdjs.TableCloseUpSceneCode.idToCallbackMap = new Map();
gdjs.TableCloseUpSceneCode.GDNewSpriteObjects1= [];
gdjs.TableCloseUpSceneCode.GDNewSpriteObjects2= [];
gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1= [];
gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects2= [];
gdjs.TableCloseUpSceneCode.GDclickableObjects1= [];
gdjs.TableCloseUpSceneCode.GDclickableObjects2= [];
gdjs.TableCloseUpSceneCode.GDInventoryPNGObjects1= [];
gdjs.TableCloseUpSceneCode.GDInventoryPNGObjects2= [];
gdjs.TableCloseUpSceneCode.GDNextArrowObjects1= [];
gdjs.TableCloseUpSceneCode.GDNextArrowObjects2= [];
gdjs.TableCloseUpSceneCode.GDBackArrowObjects1= [];
gdjs.TableCloseUpSceneCode.GDBackArrowObjects2= [];


gdjs.TableCloseUpSceneCode.mapOfGDgdjs_9546TableCloseUpSceneCode_9546GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.TableCloseUpSceneCode.GDclickableObjects1});
gdjs.TableCloseUpSceneCode.eventsList0 = function(runtimeScene) {

{

/* Reuse gdjs.TableCloseUpSceneCode.GDclickableObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TableCloseUpSceneCode.GDclickableObjects1.length;i<l;++i) {
    if ( gdjs.TableCloseUpSceneCode.GDclickableObjects1[i].getVariableString(gdjs.TableCloseUpSceneCode.GDclickableObjects1[i].getVariables().getFromIndex(0)) == "secondPartPhoto" ) {
        isConditionTrue_0 = true;
        gdjs.TableCloseUpSceneCode.GDclickableObjects1[k] = gdjs.TableCloseUpSceneCode.GDclickableObjects1[i];
        ++k;
    }
}
gdjs.TableCloseUpSceneCode.GDclickableObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_2ndPartPhoto"), gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1);
{for(var i = 0, len = gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1.length ;i < len;++i) {
    gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}
}

}


};gdjs.TableCloseUpSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NextArrow"), gdjs.TableCloseUpSceneCode.GDNextArrowObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "click");
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UILayout", 0, 0, 0);
}
{for(var i = 0, len = gdjs.TableCloseUpSceneCode.GDNextArrowObjects1.length ;i < len;++i) {
    gdjs.TableCloseUpSceneCode.GDNextArrowObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("_2ndPartPhoto"), gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1);
{for(var i = 0, len = gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1.length ;i < len;++i) {
    gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.TableCloseUpSceneCode.GDclickableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TableCloseUpSceneCode.mapOfGDgdjs_9546TableCloseUpSceneCode_9546GDclickableObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.TableCloseUpSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.TableCloseUpSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TableCloseUpSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GDclickableObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDclickableObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GDInventoryPNGObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDInventoryPNGObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GDNextArrowObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDNextArrowObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GDBackArrowObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDBackArrowObjects2.length = 0;

gdjs.TableCloseUpSceneCode.eventsList1(runtimeScene);
gdjs.TableCloseUpSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GD_95952ndPartPhotoObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GDclickableObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDclickableObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GDInventoryPNGObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDInventoryPNGObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GDNextArrowObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDNextArrowObjects2.length = 0;
gdjs.TableCloseUpSceneCode.GDBackArrowObjects1.length = 0;
gdjs.TableCloseUpSceneCode.GDBackArrowObjects2.length = 0;


return;

}

gdjs['TableCloseUpSceneCode'] = gdjs.TableCloseUpSceneCode;
