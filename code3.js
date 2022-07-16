gdjs.SkillsCode = {};
gdjs.SkillsCode.GDSettingsObjects1= [];
gdjs.SkillsCode.GDSettingsObjects2= [];
gdjs.SkillsCode.GDSettingsObjects3= [];
gdjs.SkillsCode.GDSkillsScoreTxtObjects1= [];
gdjs.SkillsCode.GDSkillsScoreTxtObjects2= [];
gdjs.SkillsCode.GDSkillsScoreTxtObjects3= [];
gdjs.SkillsCode.GDSkillsScoreObjects1= [];
gdjs.SkillsCode.GDSkillsScoreObjects2= [];
gdjs.SkillsCode.GDSkillsScoreObjects3= [];
gdjs.SkillsCode.GDDiscHighObjects1= [];
gdjs.SkillsCode.GDDiscHighObjects2= [];
gdjs.SkillsCode.GDDiscHighObjects3= [];
gdjs.SkillsCode.GDDiscHighSwipeObjects1= [];
gdjs.SkillsCode.GDDiscHighSwipeObjects2= [];
gdjs.SkillsCode.GDDiscHighSwipeObjects3= [];
gdjs.SkillsCode.GDHObjects1= [];
gdjs.SkillsCode.GDHObjects2= [];
gdjs.SkillsCode.GDHObjects3= [];
gdjs.SkillsCode.GDDiscLowObjects1= [];
gdjs.SkillsCode.GDDiscLowObjects2= [];
gdjs.SkillsCode.GDDiscLowObjects3= [];
gdjs.SkillsCode.GDDiscLowSwipeObjects1= [];
gdjs.SkillsCode.GDDiscLowSwipeObjects2= [];
gdjs.SkillsCode.GDDiscLowSwipeObjects3= [];
gdjs.SkillsCode.GDLObjects1= [];
gdjs.SkillsCode.GDLObjects2= [];
gdjs.SkillsCode.GDLObjects3= [];
gdjs.SkillsCode.GDRollerObjects1= [];
gdjs.SkillsCode.GDRollerObjects2= [];
gdjs.SkillsCode.GDRollerObjects3= [];
gdjs.SkillsCode.GDRollerSwipeObjects1= [];
gdjs.SkillsCode.GDRollerSwipeObjects2= [];
gdjs.SkillsCode.GDRollerSwipeObjects3= [];
gdjs.SkillsCode.GDRObjects1= [];
gdjs.SkillsCode.GDRObjects2= [];
gdjs.SkillsCode.GDRObjects3= [];
gdjs.SkillsCode.GDTileObjects1= [];
gdjs.SkillsCode.GDTileObjects2= [];
gdjs.SkillsCode.GDTileObjects3= [];
gdjs.SkillsCode.GDTileSwipeObjects1= [];
gdjs.SkillsCode.GDTileSwipeObjects2= [];
gdjs.SkillsCode.GDTileSwipeObjects3= [];
gdjs.SkillsCode.GDTObjects1= [];
gdjs.SkillsCode.GDTObjects2= [];
gdjs.SkillsCode.GDTObjects3= [];
gdjs.SkillsCode.GDArrowObjects1= [];
gdjs.SkillsCode.GDArrowObjects2= [];
gdjs.SkillsCode.GDArrowObjects3= [];
gdjs.SkillsCode.GDMatchObjects1= [];
gdjs.SkillsCode.GDMatchObjects2= [];
gdjs.SkillsCode.GDMatchObjects3= [];
gdjs.SkillsCode.GDMatchTxtObjects1= [];
gdjs.SkillsCode.GDMatchTxtObjects2= [];
gdjs.SkillsCode.GDMatchTxtObjects3= [];
gdjs.SkillsCode.GDClearObjects1= [];
gdjs.SkillsCode.GDClearObjects2= [];
gdjs.SkillsCode.GDClearObjects3= [];
gdjs.SkillsCode.GDCleatTxtObjects1= [];
gdjs.SkillsCode.GDCleatTxtObjects2= [];
gdjs.SkillsCode.GDCleatTxtObjects3= [];
gdjs.SkillsCode.GDSkillsObjects1= [];
gdjs.SkillsCode.GDSkillsObjects2= [];
gdjs.SkillsCode.GDSkillsObjects3= [];
gdjs.SkillsCode.GDSkillsTxtObjects1= [];
gdjs.SkillsCode.GDSkillsTxtObjects2= [];
gdjs.SkillsCode.GDSkillsTxtObjects3= [];

gdjs.SkillsCode.conditionTrue_0 = {val:false};
gdjs.SkillsCode.condition0IsTrue_0 = {val:false};
gdjs.SkillsCode.condition1IsTrue_0 = {val:false};
gdjs.SkillsCode.condition2IsTrue_0 = {val:false};


gdjs.SkillsCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("SkillsScoreTxt"), gdjs.SkillsCode.GDSkillsScoreTxtObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDSkillsScoreTxtObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDSkillsScoreTxtObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)) * 5 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)) * 1 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36)) * 10 + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)) * 3));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("SkillsScore"), gdjs.SkillsCode.GDSkillsScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkillsScoreTxt"), gdjs.SkillsCode.GDSkillsScoreTxtObjects1);
{for(var i = 0, len = gdjs.SkillsCode.GDSkillsScoreTxtObjects1.length ;i < len;++i) {
    gdjs.SkillsCode.GDSkillsScoreTxtObjects1[i].setX((( gdjs.SkillsCode.GDSkillsScoreObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDSkillsScoreObjects1[0].getCenterXInScene()) - ((gdjs.SkillsCode.GDSkillsScoreTxtObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.SkillsCode.eventsList1 = function(runtimeScene) {

{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(32));
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(32).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DiscHigh"), gdjs.SkillsCode.GDDiscHighObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscHighSwipe"), gdjs.SkillsCode.GDDiscHighSwipeObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDDiscHighSwipeObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDDiscHighSwipeObjects2[i].setY((( gdjs.SkillsCode.GDDiscHighObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighObjects2[0].getCenterYInScene()) - (0.5 * (gdjs.SkillsCode.GDDiscHighSwipeObjects2[i].getHeight())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DiscHigh"), gdjs.SkillsCode.GDDiscHighObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscHighSwipe"), gdjs.SkillsCode.GDDiscHighSwipeObjects2);

gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SkillsCode.GDDiscHighSwipeObjects2.length;i<l;++i) {
    if ( gdjs.SkillsCode.GDDiscHighSwipeObjects2[i].getX() != (( gdjs.SkillsCode.GDDiscHighObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighObjects2[0].getPointX("")) + (gdjs.SkillsCode.GDDiscHighSwipeObjects2[i].getWidth()) / 2 ) {
        gdjs.SkillsCode.condition1IsTrue_0.val = true;
        gdjs.SkillsCode.GDDiscHighSwipeObjects2[k] = gdjs.SkillsCode.GDDiscHighSwipeObjects2[i];
        ++k;
    }
}
gdjs.SkillsCode.GDDiscHighSwipeObjects2.length = k;}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SkillsCode.GDDiscHighObjects2 */
/* Reuse gdjs.SkillsCode.GDDiscHighSwipeObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(31).add(Math.round((((( gdjs.SkillsCode.GDDiscHighSwipeObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighSwipeObjects2[0].getCenterXInScene()) - (( gdjs.SkillsCode.GDDiscHighObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighObjects2[0].getCenterXInScene())) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)))));
}{for(var i = 0, len = gdjs.SkillsCode.GDDiscHighSwipeObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDDiscHighSwipeObjects2[i].setX((( gdjs.SkillsCode.GDDiscHighObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighObjects2[0].getCenterXInScene()) - (0.5 * (gdjs.SkillsCode.GDDiscHighSwipeObjects2[i].getWidth())));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DiscHigh"), gdjs.SkillsCode.GDDiscHighObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscHighSwipe"), gdjs.SkillsCode.GDDiscHighSwipeObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(Math.round((((( gdjs.SkillsCode.GDDiscHighSwipeObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighSwipeObjects2[0].getCenterXInScene()) - (( gdjs.SkillsCode.GDDiscHighObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighObjects2[0].getCenterXInScene())) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)));
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)) > 60 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33));
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(60 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)));
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)) < 0;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(0);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)) > 60 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33));
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(60 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)));
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(31)) < 0;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(0);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)) <= 60;
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
gdjs.SkillsCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)) >= 0;
}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("H"), gdjs.SkillsCode.GDHObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDHObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDHObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(30)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DiscHigh"), gdjs.SkillsCode.GDDiscHighObjects1);
gdjs.copyArray(runtimeScene.getObjects("H"), gdjs.SkillsCode.GDHObjects1);
{for(var i = 0, len = gdjs.SkillsCode.GDHObjects1.length ;i < len;++i) {
    gdjs.SkillsCode.GDHObjects1[i].setX(((( gdjs.SkillsCode.GDDiscHighObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighObjects1[0].getPointX("")) + (( gdjs.SkillsCode.GDDiscHighObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscHighObjects1[0].getWidth()) / 2) - ((gdjs.SkillsCode.GDHObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.SkillsCode.eventsList2 = function(runtimeScene) {

{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(35));
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(35).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DiscLow"), gdjs.SkillsCode.GDDiscLowObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscLowSwipe"), gdjs.SkillsCode.GDDiscLowSwipeObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDDiscLowSwipeObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDDiscLowSwipeObjects2[i].setY((( gdjs.SkillsCode.GDDiscLowObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowObjects2[0].getCenterYInScene()) - (0.5 * (gdjs.SkillsCode.GDDiscLowSwipeObjects2[i].getHeight())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DiscLow"), gdjs.SkillsCode.GDDiscLowObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscLowSwipe"), gdjs.SkillsCode.GDDiscLowSwipeObjects2);

gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SkillsCode.GDDiscLowSwipeObjects2.length;i<l;++i) {
    if ( gdjs.SkillsCode.GDDiscLowSwipeObjects2[i].getX() != (( gdjs.SkillsCode.GDDiscLowObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowObjects2[0].getPointX("")) + (gdjs.SkillsCode.GDDiscLowSwipeObjects2[i].getWidth()) / 2 ) {
        gdjs.SkillsCode.condition1IsTrue_0.val = true;
        gdjs.SkillsCode.GDDiscLowSwipeObjects2[k] = gdjs.SkillsCode.GDDiscLowSwipeObjects2[i];
        ++k;
    }
}
gdjs.SkillsCode.GDDiscLowSwipeObjects2.length = k;}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SkillsCode.GDDiscLowObjects2 */
/* Reuse gdjs.SkillsCode.GDDiscLowSwipeObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(34).add(Math.round((((( gdjs.SkillsCode.GDDiscLowSwipeObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowSwipeObjects2[0].getCenterXInScene()) - (( gdjs.SkillsCode.GDDiscLowObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowObjects2[0].getCenterXInScene())) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)))));
}{for(var i = 0, len = gdjs.SkillsCode.GDDiscLowSwipeObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDDiscLowSwipeObjects2[i].setX((( gdjs.SkillsCode.GDDiscLowObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowObjects2[0].getCenterXInScene()) - (0.5 * (gdjs.SkillsCode.GDDiscLowSwipeObjects2[i].getWidth())));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DiscLow"), gdjs.SkillsCode.GDDiscLowObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscLowSwipe"), gdjs.SkillsCode.GDDiscLowSwipeObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(Math.round((((( gdjs.SkillsCode.GDDiscLowSwipeObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowSwipeObjects2[0].getCenterXInScene()) - (( gdjs.SkillsCode.GDDiscLowObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowObjects2[0].getCenterXInScene())) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(34)));
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)) > 60 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30));
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(60 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)));
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)) < 0;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(0);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(34)) > 60 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30));
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(60 - gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(30)));
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(34)) < 0;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(0);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)) <= 60;
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
gdjs.SkillsCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(33)) >= 0;
}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("L"), gdjs.SkillsCode.GDLObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDLObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDLObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(33)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DiscLow"), gdjs.SkillsCode.GDDiscLowObjects1);
gdjs.copyArray(runtimeScene.getObjects("L"), gdjs.SkillsCode.GDLObjects1);
{for(var i = 0, len = gdjs.SkillsCode.GDLObjects1.length ;i < len;++i) {
    gdjs.SkillsCode.GDLObjects1[i].setX(((( gdjs.SkillsCode.GDDiscLowObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowObjects1[0].getPointX("")) + (( gdjs.SkillsCode.GDDiscLowObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDDiscLowObjects1[0].getWidth()) / 2) - ((gdjs.SkillsCode.GDLObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.SkillsCode.eventsList3 = function(runtimeScene) {

{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(38));
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(38).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Roller"), gdjs.SkillsCode.GDRollerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RollerSwipe"), gdjs.SkillsCode.GDRollerSwipeObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDRollerSwipeObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDRollerSwipeObjects2[i].setY((( gdjs.SkillsCode.GDRollerObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerObjects2[0].getCenterYInScene()) - (0.5 * (gdjs.SkillsCode.GDRollerSwipeObjects2[i].getHeight())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Roller"), gdjs.SkillsCode.GDRollerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RollerSwipe"), gdjs.SkillsCode.GDRollerSwipeObjects2);

gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SkillsCode.GDRollerSwipeObjects2.length;i<l;++i) {
    if ( gdjs.SkillsCode.GDRollerSwipeObjects2[i].getX() != (( gdjs.SkillsCode.GDRollerObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerObjects2[0].getCenterXInScene()) + (gdjs.SkillsCode.GDRollerSwipeObjects2[i].getWidth()) / 2 ) {
        gdjs.SkillsCode.condition1IsTrue_0.val = true;
        gdjs.SkillsCode.GDRollerSwipeObjects2[k] = gdjs.SkillsCode.GDRollerSwipeObjects2[i];
        ++k;
    }
}
gdjs.SkillsCode.GDRollerSwipeObjects2.length = k;}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SkillsCode.GDRollerObjects2 */
/* Reuse gdjs.SkillsCode.GDRollerSwipeObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(37).add(Math.round((((( gdjs.SkillsCode.GDRollerSwipeObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerSwipeObjects2[0].getCenterXInScene()) - (( gdjs.SkillsCode.GDRollerObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerObjects2[0].getCenterXInScene())) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)))));
}{for(var i = 0, len = gdjs.SkillsCode.GDRollerSwipeObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDRollerSwipeObjects2[i].setX((( gdjs.SkillsCode.GDRollerObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerObjects2[0].getCenterXInScene()) - (0.5 * (gdjs.SkillsCode.GDRollerSwipeObjects2[i].getWidth())));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Roller"), gdjs.SkillsCode.GDRollerObjects2);
gdjs.copyArray(runtimeScene.getObjects("RollerSwipe"), gdjs.SkillsCode.GDRollerSwipeObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(Math.round((((( gdjs.SkillsCode.GDRollerSwipeObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerSwipeObjects2[0].getCenterXInScene()) - (( gdjs.SkillsCode.GDRollerObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerObjects2[0].getCenterXInScene())) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)));
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36)) < 0;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(0);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36)) > 4;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(4);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) < 0;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(0);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) > 4;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(4);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36)) <= 4;
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
gdjs.SkillsCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(36)) >= 0;
}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("R"), gdjs.SkillsCode.GDRObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDRObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDRObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(36)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("R"), gdjs.SkillsCode.GDRObjects1);
gdjs.copyArray(runtimeScene.getObjects("Roller"), gdjs.SkillsCode.GDRollerObjects1);
{for(var i = 0, len = gdjs.SkillsCode.GDRObjects1.length ;i < len;++i) {
    gdjs.SkillsCode.GDRObjects1[i].setX(((( gdjs.SkillsCode.GDRollerObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerObjects1[0].getPointX("")) + (( gdjs.SkillsCode.GDRollerObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDRollerObjects1[0].getWidth()) / 2) - ((gdjs.SkillsCode.GDRObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.SkillsCode.eventsList4 = function(runtimeScene) {

{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(41));
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(41).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.SkillsCode.GDTileObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileSwipe"), gdjs.SkillsCode.GDTileSwipeObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDTileSwipeObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDTileSwipeObjects2[i].setY((( gdjs.SkillsCode.GDTileObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileObjects2[0].getCenterYInScene()) - (0.5 * (gdjs.SkillsCode.GDTileSwipeObjects2[i].getHeight())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.SkillsCode.GDTileObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileSwipe"), gdjs.SkillsCode.GDTileSwipeObjects2);

gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.SkillsCode.GDTileSwipeObjects2.length;i<l;++i) {
    if ( gdjs.SkillsCode.GDTileSwipeObjects2[i].getX() != (( gdjs.SkillsCode.GDTileObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileObjects2[0].getCenterXInScene()) + (gdjs.SkillsCode.GDTileSwipeObjects2[i].getWidth()) / 2 ) {
        gdjs.SkillsCode.condition1IsTrue_0.val = true;
        gdjs.SkillsCode.GDTileSwipeObjects2[k] = gdjs.SkillsCode.GDTileSwipeObjects2[i];
        ++k;
    }
}
gdjs.SkillsCode.GDTileSwipeObjects2.length = k;}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
/* Reuse gdjs.SkillsCode.GDTileObjects2 */
/* Reuse gdjs.SkillsCode.GDTileSwipeObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(40).add(Math.round((((( gdjs.SkillsCode.GDTileSwipeObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileSwipeObjects2[0].getCenterXInScene()) - (( gdjs.SkillsCode.GDTileObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileObjects2[0].getCenterXInScene())) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)))));
}{for(var i = 0, len = gdjs.SkillsCode.GDTileSwipeObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDTileSwipeObjects2[i].setX((( gdjs.SkillsCode.GDTileObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileObjects2[0].getCenterXInScene()) - (0.5 * (gdjs.SkillsCode.GDTileSwipeObjects2[i].getWidth())));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.SkillsCode.GDTileObjects2);
gdjs.copyArray(runtimeScene.getObjects("TileSwipe"), gdjs.SkillsCode.GDTileSwipeObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(Math.round((((( gdjs.SkillsCode.GDTileSwipeObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileSwipeObjects2[0].getCenterXInScene()) - (( gdjs.SkillsCode.GDTileObjects2.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileObjects2[0].getCenterXInScene())) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(27)))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(40)));
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)) < 0;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(0);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)) > 28;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(28);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(40)) < 0;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(0);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(40)) > 28;
}if (gdjs.SkillsCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(28);
}}

}


{


gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)) <= 36;
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
gdjs.SkillsCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(39)) >= 0;
}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("T"), gdjs.SkillsCode.GDTObjects2);
{for(var i = 0, len = gdjs.SkillsCode.GDTObjects2.length ;i < len;++i) {
    gdjs.SkillsCode.GDTObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(39)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("T"), gdjs.SkillsCode.GDTObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tile"), gdjs.SkillsCode.GDTileObjects1);
{for(var i = 0, len = gdjs.SkillsCode.GDTObjects1.length ;i < len;++i) {
    gdjs.SkillsCode.GDTObjects1[i].setX(((( gdjs.SkillsCode.GDTileObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileObjects1[0].getPointX("")) + (( gdjs.SkillsCode.GDTileObjects1.length === 0 ) ? 0 :gdjs.SkillsCode.GDTileObjects1[0].getWidth()) / 2) - ((gdjs.SkillsCode.GDTObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.SkillsCode.mapOfGDgdjs_46SkillsCode_46GDClearObjects2Objects = Hashtable.newFrom({"Clear": gdjs.SkillsCode.GDClearObjects2});
gdjs.SkillsCode.mapOfGDgdjs_46SkillsCode_46GDMatchObjects2Objects = Hashtable.newFrom({"Match": gdjs.SkillsCode.GDMatchObjects2});
gdjs.SkillsCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Clear"), gdjs.SkillsCode.GDClearObjects2);

gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SkillsCode.mapOfGDgdjs_46SkillsCode_46GDClearObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
gdjs.SkillsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(30).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(31).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(33).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(34).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(36).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(39).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(40).setNumber(0);
}{gdjs.deviceVibration.startVibration(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Click.mp3", false, 10, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Match"), gdjs.SkillsCode.GDMatchObjects2);

gdjs.SkillsCode.condition0IsTrue_0.val = false;
gdjs.SkillsCode.condition1IsTrue_0.val = false;
{
gdjs.SkillsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SkillsCode.mapOfGDgdjs_46SkillsCode_46GDMatchObjects2Objects, runtimeScene, true, false);
}if ( gdjs.SkillsCode.condition0IsTrue_0.val ) {
{
gdjs.SkillsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SkillsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MatchSwipe", false);
}{gdjs.deviceVibration.startVibration(10);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Match"), gdjs.SkillsCode.GDMatchObjects1);
gdjs.copyArray(runtimeScene.getObjects("MatchTxt"), gdjs.SkillsCode.GDMatchTxtObjects1);
{for(var i = 0, len = gdjs.SkillsCode.GDMatchObjects1.length ;i < len;++i) {
    gdjs.SkillsCode.GDMatchObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.SkillsCode.GDMatchTxtObjects1.length ;i < len;++i) {
    gdjs.SkillsCode.GDMatchTxtObjects1[i].setOpacity(50);
}
}}

}


};gdjs.SkillsCode.eventsList6 = function(runtimeScene) {

{


gdjs.SkillsCode.eventsList0(runtimeScene);
}


{


gdjs.SkillsCode.eventsList1(runtimeScene);
}


{


gdjs.SkillsCode.eventsList2(runtimeScene);
}


{


gdjs.SkillsCode.eventsList3(runtimeScene);
}


{


gdjs.SkillsCode.eventsList4(runtimeScene);
}


{


gdjs.SkillsCode.eventsList5(runtimeScene);
}


};

gdjs.SkillsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SkillsCode.GDSettingsObjects1.length = 0;
gdjs.SkillsCode.GDSettingsObjects2.length = 0;
gdjs.SkillsCode.GDSettingsObjects3.length = 0;
gdjs.SkillsCode.GDSkillsScoreTxtObjects1.length = 0;
gdjs.SkillsCode.GDSkillsScoreTxtObjects2.length = 0;
gdjs.SkillsCode.GDSkillsScoreTxtObjects3.length = 0;
gdjs.SkillsCode.GDSkillsScoreObjects1.length = 0;
gdjs.SkillsCode.GDSkillsScoreObjects2.length = 0;
gdjs.SkillsCode.GDSkillsScoreObjects3.length = 0;
gdjs.SkillsCode.GDDiscHighObjects1.length = 0;
gdjs.SkillsCode.GDDiscHighObjects2.length = 0;
gdjs.SkillsCode.GDDiscHighObjects3.length = 0;
gdjs.SkillsCode.GDDiscHighSwipeObjects1.length = 0;
gdjs.SkillsCode.GDDiscHighSwipeObjects2.length = 0;
gdjs.SkillsCode.GDDiscHighSwipeObjects3.length = 0;
gdjs.SkillsCode.GDHObjects1.length = 0;
gdjs.SkillsCode.GDHObjects2.length = 0;
gdjs.SkillsCode.GDHObjects3.length = 0;
gdjs.SkillsCode.GDDiscLowObjects1.length = 0;
gdjs.SkillsCode.GDDiscLowObjects2.length = 0;
gdjs.SkillsCode.GDDiscLowObjects3.length = 0;
gdjs.SkillsCode.GDDiscLowSwipeObjects1.length = 0;
gdjs.SkillsCode.GDDiscLowSwipeObjects2.length = 0;
gdjs.SkillsCode.GDDiscLowSwipeObjects3.length = 0;
gdjs.SkillsCode.GDLObjects1.length = 0;
gdjs.SkillsCode.GDLObjects2.length = 0;
gdjs.SkillsCode.GDLObjects3.length = 0;
gdjs.SkillsCode.GDRollerObjects1.length = 0;
gdjs.SkillsCode.GDRollerObjects2.length = 0;
gdjs.SkillsCode.GDRollerObjects3.length = 0;
gdjs.SkillsCode.GDRollerSwipeObjects1.length = 0;
gdjs.SkillsCode.GDRollerSwipeObjects2.length = 0;
gdjs.SkillsCode.GDRollerSwipeObjects3.length = 0;
gdjs.SkillsCode.GDRObjects1.length = 0;
gdjs.SkillsCode.GDRObjects2.length = 0;
gdjs.SkillsCode.GDRObjects3.length = 0;
gdjs.SkillsCode.GDTileObjects1.length = 0;
gdjs.SkillsCode.GDTileObjects2.length = 0;
gdjs.SkillsCode.GDTileObjects3.length = 0;
gdjs.SkillsCode.GDTileSwipeObjects1.length = 0;
gdjs.SkillsCode.GDTileSwipeObjects2.length = 0;
gdjs.SkillsCode.GDTileSwipeObjects3.length = 0;
gdjs.SkillsCode.GDTObjects1.length = 0;
gdjs.SkillsCode.GDTObjects2.length = 0;
gdjs.SkillsCode.GDTObjects3.length = 0;
gdjs.SkillsCode.GDArrowObjects1.length = 0;
gdjs.SkillsCode.GDArrowObjects2.length = 0;
gdjs.SkillsCode.GDArrowObjects3.length = 0;
gdjs.SkillsCode.GDMatchObjects1.length = 0;
gdjs.SkillsCode.GDMatchObjects2.length = 0;
gdjs.SkillsCode.GDMatchObjects3.length = 0;
gdjs.SkillsCode.GDMatchTxtObjects1.length = 0;
gdjs.SkillsCode.GDMatchTxtObjects2.length = 0;
gdjs.SkillsCode.GDMatchTxtObjects3.length = 0;
gdjs.SkillsCode.GDClearObjects1.length = 0;
gdjs.SkillsCode.GDClearObjects2.length = 0;
gdjs.SkillsCode.GDClearObjects3.length = 0;
gdjs.SkillsCode.GDCleatTxtObjects1.length = 0;
gdjs.SkillsCode.GDCleatTxtObjects2.length = 0;
gdjs.SkillsCode.GDCleatTxtObjects3.length = 0;
gdjs.SkillsCode.GDSkillsObjects1.length = 0;
gdjs.SkillsCode.GDSkillsObjects2.length = 0;
gdjs.SkillsCode.GDSkillsObjects3.length = 0;
gdjs.SkillsCode.GDSkillsTxtObjects1.length = 0;
gdjs.SkillsCode.GDSkillsTxtObjects2.length = 0;
gdjs.SkillsCode.GDSkillsTxtObjects3.length = 0;

gdjs.SkillsCode.eventsList6(runtimeScene);
return;

}

gdjs['SkillsCode'] = gdjs.SkillsCode;
