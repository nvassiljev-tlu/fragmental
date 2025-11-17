gdjs.Main_32Menu_32SceneCode = {};
gdjs.Main_32Menu_32SceneCode.localVariables = [];
gdjs.Main_32Menu_32SceneCode.idToCallbackMap = new Map();
gdjs.Main_32Menu_32SceneCode.GDMain_9595Menu_9595PNGObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDMain_9595Menu_9595PNGObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDAbout_9595PNGObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDAbout_9595PNGObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDclickableObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDclickableObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDInventoryPNGObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDInventoryPNGObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDNextArrowObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDNextArrowObjects2= [];
gdjs.Main_32Menu_32SceneCode.GDBackArrowObjects1= [];
gdjs.Main_32Menu_32SceneCode.GDBackArrowObjects2= [];


gdjs.Main_32Menu_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Start_PNG"), gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1.length;i<l;++i) {
    if ( gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1[k] = gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1[i];
        ++k;
    }
}
gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Waking Up Scene", false);
}
}

}


};

gdjs.Main_32Menu_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32Menu_32SceneCode.GDMain_9595Menu_9595PNGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDMain_9595Menu_9595PNGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDAbout_9595PNGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDAbout_9595PNGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDclickableObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDclickableObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDInventoryPNGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDInventoryPNGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNextArrowObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNextArrowObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDBackArrowObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDBackArrowObjects2.length = 0;

gdjs.Main_32Menu_32SceneCode.eventsList0(runtimeScene);
gdjs.Main_32Menu_32SceneCode.GDMain_9595Menu_9595PNGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDMain_9595Menu_9595PNGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDAbout_9595PNGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDAbout_9595PNGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDStart_9595PNGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDclickableObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDclickableObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDInventoryPNGObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDInventoryPNGObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNextArrowObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDNextArrowObjects2.length = 0;
gdjs.Main_32Menu_32SceneCode.GDBackArrowObjects1.length = 0;
gdjs.Main_32Menu_32SceneCode.GDBackArrowObjects2.length = 0;


return;

}

gdjs['Main_32Menu_32SceneCode'] = gdjs.Main_32Menu_32SceneCode;
