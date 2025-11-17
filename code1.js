gdjs.Waking_32Up_32SceneCode = {};
gdjs.Waking_32Up_32SceneCode.localVariables = [];
gdjs.Waking_32Up_32SceneCode.idToCallbackMap = new Map();
gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects1= [];
gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects2= [];
gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects3= [];
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects1= [];
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects2= [];
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects3= [];
gdjs.Waking_32Up_32SceneCode.GDclickableObjects1= [];
gdjs.Waking_32Up_32SceneCode.GDclickableObjects2= [];
gdjs.Waking_32Up_32SceneCode.GDclickableObjects3= [];
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects1= [];
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects2= [];
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects3= [];
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects1= [];
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects2= [];
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects3= [];
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects1= [];
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects2= [];
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects3= [];


gdjs.Waking_32Up_32SceneCode.mapOfGDgdjs_9546Waking_959532Up_959532SceneCode_9546GDclickableObjects1Objects = Hashtable.newFrom({"clickable": gdjs.Waking_32Up_32SceneCode.GDclickableObjects1});
gdjs.Waking_32Up_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Waking_32Up_32SceneCode.GDclickableObjects1, gdjs.Waking_32Up_32SceneCode.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waking_32Up_32SceneCode.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.Waking_32Up_32SceneCode.GDclickableObjects2[i].getVariableString(gdjs.Waking_32Up_32SceneCode.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "photoFrame" ) {
        isConditionTrue_0 = true;
        gdjs.Waking_32Up_32SceneCode.GDclickableObjects2[k] = gdjs.Waking_32Up_32SceneCode.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.Waking_32Up_32SceneCode.GDclickableObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PhotoCloseUpScene");
}
}

}


{

gdjs.copyArray(gdjs.Waking_32Up_32SceneCode.GDclickableObjects1, gdjs.Waking_32Up_32SceneCode.GDclickableObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waking_32Up_32SceneCode.GDclickableObjects2.length;i<l;++i) {
    if ( gdjs.Waking_32Up_32SceneCode.GDclickableObjects2[i].getVariableString(gdjs.Waking_32Up_32SceneCode.GDclickableObjects2[i].getVariables().getFromIndex(0)) == "table" ) {
        isConditionTrue_0 = true;
        gdjs.Waking_32Up_32SceneCode.GDclickableObjects2[k] = gdjs.Waking_32Up_32SceneCode.GDclickableObjects2[i];
        ++k;
    }
}
gdjs.Waking_32Up_32SceneCode.GDclickableObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "TableCloseUpScene");
}
}

}


{

/* Reuse gdjs.Waking_32Up_32SceneCode.GDclickableObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Waking_32Up_32SceneCode.GDclickableObjects1.length;i<l;++i) {
    if ( gdjs.Waking_32Up_32SceneCode.GDclickableObjects1[i].getVariableString(gdjs.Waking_32Up_32SceneCode.GDclickableObjects1[i].getVariables().getFromIndex(0)) == "bed" ) {
        isConditionTrue_0 = true;
        gdjs.Waking_32Up_32SceneCode.GDclickableObjects1[k] = gdjs.Waking_32Up_32SceneCode.GDclickableObjects1[i];
        ++k;
    }
}
gdjs.Waking_32Up_32SceneCode.GDclickableObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "UnderBedScene");
}
}

}


};gdjs.Waking_32Up_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "click");
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UILayout", 0, 0, 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clickable"), gdjs.Waking_32Up_32SceneCode.GDclickableObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Waking_32Up_32SceneCode.mapOfGDgdjs_9546Waking_959532Up_959532SceneCode_9546GDclickableObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Waking_32Up_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Waking_32Up_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDclickableObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDclickableObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDclickableObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects3.length = 0;

gdjs.Waking_32Up_32SceneCode.eventsList1(runtimeScene);
gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDWaking_9595Up_9595PNGObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryBoxObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDclickableObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDclickableObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDclickableObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDInventoryPNGObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDNextArrowObjects3.length = 0;
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects1.length = 0;
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects2.length = 0;
gdjs.Waking_32Up_32SceneCode.GDBackArrowObjects3.length = 0;


return;

}

gdjs['Waking_32Up_32SceneCode'] = gdjs.Waking_32Up_32SceneCode;
