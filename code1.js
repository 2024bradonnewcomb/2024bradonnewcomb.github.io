gdjs.SkillsCode = {};
gdjs.SkillsCode.GDSkillsScoreTxtObjects1= [];
gdjs.SkillsCode.GDSkillsScoreTxtObjects2= [];
gdjs.SkillsCode.GDSkillsScoreTxtObjects3= [];
gdjs.SkillsCode.GDSkillsScoreObjects1= [];
gdjs.SkillsCode.GDSkillsScoreObjects2= [];
gdjs.SkillsCode.GDSkillsScoreObjects3= [];

gdjs.SkillsCode.conditionTrue_0 = {val:false};
gdjs.SkillsCode.condition0IsTrue_0 = {val:false};


gdjs.SkillsCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("SkillsScoreTxt"), gdjs.SkillsCode.GDSkillsScoreTxtObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDSkillsScoreTxtObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDSkillsScoreTxtObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("SkillsScoreTxt"), gdjs.SkillsCode.GDSkillsScoreTxtObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDSkillsScoreTxtObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDSkillsScoreTxtObjects2[i].setX(384.5 - ((gdjs.SkillsCode.GDSkillsScoreTxtObjects2[i].getWidth()) / 2));
}
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) * 5) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) * 5) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) * 1) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) * 1) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 10) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) * 10) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) * 3) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) * 3));
}}

}


};gdjs.SkillsCode.eventsList1 = function(runtimeScene) {

{


gdjs.SkillsCode.eventsList0(runtimeScene);
}


};

gdjs.SkillsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SkillsCode.GDSkillsScoreTxtObjects1.length = 0;
gdjs.SkillsCode.GDSkillsScoreTxtObjects2.length = 0;
gdjs.SkillsCode.GDSkillsScoreTxtObjects3.length = 0;
gdjs.SkillsCode.GDSkillsScoreObjects1.length = 0;
gdjs.SkillsCode.GDSkillsScoreObjects2.length = 0;
gdjs.SkillsCode.GDSkillsScoreObjects3.length = 0;

gdjs.SkillsCode.eventsList1(runtimeScene);
return;

}

gdjs['SkillsCode'] = gdjs.SkillsCode;
