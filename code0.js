gdjs.MatchSwipeCode = {};
gdjs.MatchSwipeCode.GDMatchObjects1= [];
gdjs.MatchSwipeCode.GDMatchObjects2= [];
gdjs.MatchSwipeCode.GDMatchObjects3= [];
gdjs.MatchSwipeCode.GDMatchTxtObjects1= [];
gdjs.MatchSwipeCode.GDMatchTxtObjects2= [];
gdjs.MatchSwipeCode.GDMatchTxtObjects3= [];
gdjs.MatchSwipeCode.GDSkillsObjects1= [];
gdjs.MatchSwipeCode.GDSkillsObjects2= [];
gdjs.MatchSwipeCode.GDSkillsObjects3= [];
gdjs.MatchSwipeCode.GDSkillsTxtObjects1= [];
gdjs.MatchSwipeCode.GDSkillsTxtObjects2= [];
gdjs.MatchSwipeCode.GDSkillsTxtObjects3= [];
gdjs.MatchSwipeCode.GDClearObjects1= [];
gdjs.MatchSwipeCode.GDClearObjects2= [];
gdjs.MatchSwipeCode.GDClearObjects3= [];
gdjs.MatchSwipeCode.GDCleatTxtObjects1= [];
gdjs.MatchSwipeCode.GDCleatTxtObjects2= [];
gdjs.MatchSwipeCode.GDCleatTxtObjects3= [];
gdjs.MatchSwipeCode.GDScoreRedObjects1= [];
gdjs.MatchSwipeCode.GDScoreRedObjects2= [];
gdjs.MatchSwipeCode.GDScoreRedObjects3= [];
gdjs.MatchSwipeCode.GDScoreRedTxtObjects1= [];
gdjs.MatchSwipeCode.GDScoreRedTxtObjects2= [];
gdjs.MatchSwipeCode.GDScoreRedTxtObjects3= [];
gdjs.MatchSwipeCode.GDScoreBlueObjects1= [];
gdjs.MatchSwipeCode.GDScoreBlueObjects2= [];
gdjs.MatchSwipeCode.GDScoreBlueObjects3= [];
gdjs.MatchSwipeCode.GDScoreBlueTxtObjects1= [];
gdjs.MatchSwipeCode.GDScoreBlueTxtObjects2= [];
gdjs.MatchSwipeCode.GDScoreBlueTxtObjects3= [];
gdjs.MatchSwipeCode.GDDiscRedHighObjects1= [];
gdjs.MatchSwipeCode.GDDiscRedHighObjects2= [];
gdjs.MatchSwipeCode.GDDiscRedHighObjects3= [];
gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects1= [];
gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2= [];
gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects3= [];
gdjs.MatchSwipeCode.GDDiscRedLowObjects1= [];
gdjs.MatchSwipeCode.GDDiscRedLowObjects2= [];
gdjs.MatchSwipeCode.GDDiscRedLowObjects3= [];
gdjs.MatchSwipeCode.GDDiscRedLowSwipeObjects1= [];
gdjs.MatchSwipeCode.GDDiscRedLowSwipeObjects2= [];
gdjs.MatchSwipeCode.GDDiscRedLowSwipeObjects3= [];
gdjs.MatchSwipeCode.GDHRObjects1= [];
gdjs.MatchSwipeCode.GDHRObjects2= [];
gdjs.MatchSwipeCode.GDHRObjects3= [];
gdjs.MatchSwipeCode.GDLRObjects1= [];
gdjs.MatchSwipeCode.GDLRObjects2= [];
gdjs.MatchSwipeCode.GDLRObjects3= [];
gdjs.MatchSwipeCode.GDDiscBlueObjects1= [];
gdjs.MatchSwipeCode.GDDiscBlueObjects2= [];
gdjs.MatchSwipeCode.GDDiscBlueObjects3= [];
gdjs.MatchSwipeCode.GDHBObjects1= [];
gdjs.MatchSwipeCode.GDHBObjects2= [];
gdjs.MatchSwipeCode.GDHBObjects3= [];
gdjs.MatchSwipeCode.GDLBObjects1= [];
gdjs.MatchSwipeCode.GDLBObjects2= [];
gdjs.MatchSwipeCode.GDLBObjects3= [];
gdjs.MatchSwipeCode.GDTileRedObjects1= [];
gdjs.MatchSwipeCode.GDTileRedObjects2= [];
gdjs.MatchSwipeCode.GDTileRedObjects3= [];
gdjs.MatchSwipeCode.GDTRObjects1= [];
gdjs.MatchSwipeCode.GDTRObjects2= [];
gdjs.MatchSwipeCode.GDTRObjects3= [];
gdjs.MatchSwipeCode.GDTileBlueObjects1= [];
gdjs.MatchSwipeCode.GDTileBlueObjects2= [];
gdjs.MatchSwipeCode.GDTileBlueObjects3= [];
gdjs.MatchSwipeCode.GDTBObjects1= [];
gdjs.MatchSwipeCode.GDTBObjects2= [];
gdjs.MatchSwipeCode.GDTBObjects3= [];
gdjs.MatchSwipeCode.GDRollerRedObjects1= [];
gdjs.MatchSwipeCode.GDRollerRedObjects2= [];
gdjs.MatchSwipeCode.GDRollerRedObjects3= [];
gdjs.MatchSwipeCode.GDRRObjects1= [];
gdjs.MatchSwipeCode.GDRRObjects2= [];
gdjs.MatchSwipeCode.GDRRObjects3= [];
gdjs.MatchSwipeCode.GDRollerBlueObjects1= [];
gdjs.MatchSwipeCode.GDRollerBlueObjects2= [];
gdjs.MatchSwipeCode.GDRollerBlueObjects3= [];
gdjs.MatchSwipeCode.GDRBObjects1= [];
gdjs.MatchSwipeCode.GDRBObjects2= [];
gdjs.MatchSwipeCode.GDRBObjects3= [];
gdjs.MatchSwipeCode.GDAutonSelectorObjects1= [];
gdjs.MatchSwipeCode.GDAutonSelectorObjects2= [];
gdjs.MatchSwipeCode.GDAutonSelectorObjects3= [];

gdjs.MatchSwipeCode.conditionTrue_0 = {val:false};
gdjs.MatchSwipeCode.condition0IsTrue_0 = {val:false};
gdjs.MatchSwipeCode.condition1IsTrue_0 = {val:false};
gdjs.MatchSwipeCode.condition2IsTrue_0 = {val:false};


gdjs.MatchSwipeCode.eventsList0 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("ScoreRedTxt"), gdjs.MatchSwipeCode.GDScoreRedTxtObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDScoreRedTxtObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDScoreRedTxtObjects2[i].setString(gdjs.evtTools.common.toString((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) * 5) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) * 1) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) * 10) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) * 3) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(15)) * 10)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ScoreRedTxt"), gdjs.MatchSwipeCode.GDScoreRedTxtObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDScoreRedTxtObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDScoreRedTxtObjects2[i].setX(192 - ((gdjs.MatchSwipeCode.GDScoreRedTxtObjects2[i].getWidth()) / 2));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ScoreBlueTxt"), gdjs.MatchSwipeCode.GDScoreBlueTxtObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDScoreBlueTxtObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDScoreBlueTxtObjects2[i].setString(gdjs.evtTools.common.toString((gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) * 5) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) * 1) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) * 10) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) * 3) + (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) * 10)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("ScoreBlueTxt"), gdjs.MatchSwipeCode.GDScoreBlueTxtObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDScoreBlueTxtObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDScoreBlueTxtObjects1[i].setX(576 - ((gdjs.MatchSwipeCode.GDScoreBlueTxtObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.MatchSwipeCode.eventsList1 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("DiscRedHigh"), gdjs.MatchSwipeCode.GDDiscRedHighObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscRedHighSwipe"), gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2[i].setY((( gdjs.MatchSwipeCode.GDDiscRedHighObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighObjects2[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("DiscRedHigh"), gdjs.MatchSwipeCode.GDDiscRedHighObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscRedHighSwipe"), gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2);

gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2.length;i<l;++i) {
    if ( gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2[i].getX() != (( gdjs.MatchSwipeCode.GDDiscRedHighObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighObjects2[0].getPointX("")) ) {
        gdjs.MatchSwipeCode.condition1IsTrue_0.val = true;
        gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2[k] = gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2[i];
        ++k;
    }
}
gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2.length = k;}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MatchSwipeCode.GDDiscRedHighObjects2 */
/* Reuse gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(3).add(Math.round((((( gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2[0].getPointX("")) - (( gdjs.MatchSwipeCode.GDDiscRedHighObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighObjects2[0].getPointX(""))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)))));
}{for(var i = 0, len = gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2[i].setX((( gdjs.MatchSwipeCode.GDDiscRedHighObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighObjects2[0].getPointX("")));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DiscRedHigh"), gdjs.MatchSwipeCode.GDDiscRedHighObjects2);
gdjs.copyArray(runtimeScene.getObjects("DiscRedHighSwipe"), gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(Math.round((((( gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2[0].getPointX("")) - (( gdjs.MatchSwipeCode.GDDiscRedHighObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighObjects2[0].getPointX(""))) / gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)))) + gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) > 60;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(60);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 60;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(60);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) <= 60;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 0;
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HR"), gdjs.MatchSwipeCode.GDHRObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDHRObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDHRObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("DiscRedHigh"), gdjs.MatchSwipeCode.GDDiscRedHighObjects2);
gdjs.copyArray(runtimeScene.getObjects("HR"), gdjs.MatchSwipeCode.GDHRObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDHRObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDHRObjects2[i].setX(((( gdjs.MatchSwipeCode.GDDiscRedHighObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighObjects2[0].getPointX("")) + (( gdjs.MatchSwipeCode.GDDiscRedHighObjects2.length === 0 ) ? 0 :gdjs.MatchSwipeCode.GDDiscRedHighObjects2[0].getWidth()) / 2) - ((gdjs.MatchSwipeCode.GDHRObjects2[i].getWidth()) / 2));
}
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) != gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4));
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{gdjs.deviceVibration.startVibration(5);
}}

}


{


{
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)));
}}

}


};gdjs.MatchSwipeCode.eventsList2 = function(runtimeScene) {

{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) < 60;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) <= 59;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).add(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 1;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).sub(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) > 60;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(60);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) <= 60;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) >= 0;
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LR"), gdjs.MatchSwipeCode.GDLRObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDLRObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDLRObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("LR"), gdjs.MatchSwipeCode.GDLRObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDLRObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDLRObjects1[i].setX(176 - ((gdjs.MatchSwipeCode.GDLRObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.MatchSwipeCode.eventsList3 = function(runtimeScene) {

{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 60;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) <= 59;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).add(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).sub(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) >= 1;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).sub(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) > 60;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(60);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) <= 60;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) >= 0;
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("HB"), gdjs.MatchSwipeCode.GDHBObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDHBObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDHBObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(5)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("HB"), gdjs.MatchSwipeCode.GDHBObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDHBObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDHBObjects1[i].setX(576 - ((gdjs.MatchSwipeCode.GDHBObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.MatchSwipeCode.eventsList4 = function(runtimeScene) {

{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) < 60;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) <= 59;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).add(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) > 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) >= 1;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).sub(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) > 60;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(60);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) >= 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) <= 60;
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LB"), gdjs.MatchSwipeCode.GDLBObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDLBObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDLBObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("LB"), gdjs.MatchSwipeCode.GDLBObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDLBObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDLBObjects1[i].setX(576 - ((gdjs.MatchSwipeCode.GDLBObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.MatchSwipeCode.eventsList5 = function(runtimeScene) {

{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 4;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).add(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) <= 3;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).add(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) >= 1;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 4;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(4);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RR"), gdjs.MatchSwipeCode.GDRRObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDRRObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDRRObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RR"), gdjs.MatchSwipeCode.GDRRObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDRRObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDRRObjects1[i].setX(192 - ((gdjs.MatchSwipeCode.GDRRObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.MatchSwipeCode.eventsList6 = function(runtimeScene) {

{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) < 4;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) <= 3;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).add(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) > 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).sub(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) >= 1;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).sub(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(8)) > 4;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(4);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RB"), gdjs.MatchSwipeCode.GDRBObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDRBObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDRBObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(8)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("RB"), gdjs.MatchSwipeCode.GDRBObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDRBObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDRBObjects1[i].setX(576 - ((gdjs.MatchSwipeCode.GDRBObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.MatchSwipeCode.eventsList7 = function(runtimeScene) {

{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) < 36;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).add(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) <= 35;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).add(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) > 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).sub(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) >= 1;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).sub(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) > 36;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(36);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) <= 36;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) >= 0;
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TR"), gdjs.MatchSwipeCode.GDTRObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDTRObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDTRObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(10)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TR"), gdjs.MatchSwipeCode.GDTRObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDTRObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDTRObjects1[i].setX(192 - ((gdjs.MatchSwipeCode.GDTRObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.MatchSwipeCode.eventsList8 = function(runtimeScene) {

{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) < 36;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).add(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) <= 35;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).add(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) > 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).sub(1);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) >= 1;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).sub(5);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) < 0;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) > 36;
}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(36);
}}

}


{


gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) >= 0;
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(11)) <= 36;
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("TB"), gdjs.MatchSwipeCode.GDTBObjects2);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDTBObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDTBObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(11)));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("TB"), gdjs.MatchSwipeCode.GDTBObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDTBObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDTBObjects1[i].setX(576 - ((gdjs.MatchSwipeCode.GDTBObjects1[i].getWidth()) / 2));
}
}}

}


};gdjs.MatchSwipeCode.mapOfGDgdjs_46MatchSwipeCode_46GDAutonSelectorObjects2Objects = Hashtable.newFrom({"AutonSelector": gdjs.MatchSwipeCode.GDAutonSelectorObjects2});
gdjs.MatchSwipeCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AutonSelector"), gdjs.MatchSwipeCode.GDAutonSelectorObjects2);

gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MatchSwipeCode.mapOfGDgdjs_46MatchSwipeCode_46GDAutonSelectorObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
/* Reuse gdjs.MatchSwipeCode.GDAutonSelectorObjects2 */
{for(var i = 0, len = gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i].setAnimation(gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i].getAnimation() + (1));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AutonSelector"), gdjs.MatchSwipeCode.GDAutonSelectorObjects2);

gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length;i<l;++i) {
    if ( gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i].getAnimation() == 3 ) {
        gdjs.MatchSwipeCode.condition0IsTrue_0.val = true;
        gdjs.MatchSwipeCode.GDAutonSelectorObjects2[k] = gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i];
        ++k;
    }
}
gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length = k;}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MatchSwipeCode.GDAutonSelectorObjects2 */
{for(var i = 0, len = gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AutonSelector"), gdjs.MatchSwipeCode.GDAutonSelectorObjects2);

gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length;i<l;++i) {
    if ( gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i].getAnimation() == 0 ) {
        gdjs.MatchSwipeCode.condition0IsTrue_0.val = true;
        gdjs.MatchSwipeCode.GDAutonSelectorObjects2[k] = gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i];
        ++k;
    }
}
gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length = k;}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AutonSelector"), gdjs.MatchSwipeCode.GDAutonSelectorObjects2);

gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length;i<l;++i) {
    if ( gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i].getAnimation() == 1 ) {
        gdjs.MatchSwipeCode.condition0IsTrue_0.val = true;
        gdjs.MatchSwipeCode.GDAutonSelectorObjects2[k] = gdjs.MatchSwipeCode.GDAutonSelectorObjects2[i];
        ++k;
    }
}
gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length = k;}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AutonSelector"), gdjs.MatchSwipeCode.GDAutonSelectorObjects1);

gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.MatchSwipeCode.GDAutonSelectorObjects1.length;i<l;++i) {
    if ( gdjs.MatchSwipeCode.GDAutonSelectorObjects1[i].getAnimation() == 2 ) {
        gdjs.MatchSwipeCode.condition0IsTrue_0.val = true;
        gdjs.MatchSwipeCode.GDAutonSelectorObjects1[k] = gdjs.MatchSwipeCode.GDAutonSelectorObjects1[i];
        ++k;
    }
}
gdjs.MatchSwipeCode.GDAutonSelectorObjects1.length = k;}if (gdjs.MatchSwipeCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(15).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(1);
}}

}


};gdjs.MatchSwipeCode.mapOfGDgdjs_46MatchSwipeCode_46GDClearObjects2Objects = Hashtable.newFrom({"Clear": gdjs.MatchSwipeCode.GDClearObjects2});
gdjs.MatchSwipeCode.mapOfGDgdjs_46MatchSwipeCode_46GDSkillsObjects2Objects = Hashtable.newFrom({"Skills": gdjs.MatchSwipeCode.GDSkillsObjects2});
gdjs.MatchSwipeCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Clear"), gdjs.MatchSwipeCode.GDClearObjects2);

gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MatchSwipeCode.mapOfGDgdjs_46MatchSwipeCode_46GDClearObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(0);
}{gdjs.deviceVibration.startVibration(5);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skills"), gdjs.MatchSwipeCode.GDSkillsObjects2);

gdjs.MatchSwipeCode.condition0IsTrue_0.val = false;
gdjs.MatchSwipeCode.condition1IsTrue_0.val = false;
{
gdjs.MatchSwipeCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MatchSwipeCode.mapOfGDgdjs_46MatchSwipeCode_46GDSkillsObjects2Objects, runtimeScene, true, false);
}if ( gdjs.MatchSwipeCode.condition0IsTrue_0.val ) {
{
gdjs.MatchSwipeCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MatchSwipeCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Skills", false);
}{gdjs.deviceVibration.startVibration(5);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Skills"), gdjs.MatchSwipeCode.GDSkillsObjects1);
gdjs.copyArray(runtimeScene.getObjects("SkillsTxt"), gdjs.MatchSwipeCode.GDSkillsTxtObjects1);
{for(var i = 0, len = gdjs.MatchSwipeCode.GDSkillsObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDSkillsObjects1[i].setOpacity(50);
}
}{for(var i = 0, len = gdjs.MatchSwipeCode.GDSkillsTxtObjects1.length ;i < len;++i) {
    gdjs.MatchSwipeCode.GDSkillsTxtObjects1[i].setOpacity(50);
}
}}

}


};gdjs.MatchSwipeCode.eventsList11 = function(runtimeScene) {

{


gdjs.MatchSwipeCode.eventsList0(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList1(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList2(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList3(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList4(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList5(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList6(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList7(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList8(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList9(runtimeScene);
}


{


gdjs.MatchSwipeCode.eventsList10(runtimeScene);
}


};

gdjs.MatchSwipeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MatchSwipeCode.GDMatchObjects1.length = 0;
gdjs.MatchSwipeCode.GDMatchObjects2.length = 0;
gdjs.MatchSwipeCode.GDMatchObjects3.length = 0;
gdjs.MatchSwipeCode.GDMatchTxtObjects1.length = 0;
gdjs.MatchSwipeCode.GDMatchTxtObjects2.length = 0;
gdjs.MatchSwipeCode.GDMatchTxtObjects3.length = 0;
gdjs.MatchSwipeCode.GDSkillsObjects1.length = 0;
gdjs.MatchSwipeCode.GDSkillsObjects2.length = 0;
gdjs.MatchSwipeCode.GDSkillsObjects3.length = 0;
gdjs.MatchSwipeCode.GDSkillsTxtObjects1.length = 0;
gdjs.MatchSwipeCode.GDSkillsTxtObjects2.length = 0;
gdjs.MatchSwipeCode.GDSkillsTxtObjects3.length = 0;
gdjs.MatchSwipeCode.GDClearObjects1.length = 0;
gdjs.MatchSwipeCode.GDClearObjects2.length = 0;
gdjs.MatchSwipeCode.GDClearObjects3.length = 0;
gdjs.MatchSwipeCode.GDCleatTxtObjects1.length = 0;
gdjs.MatchSwipeCode.GDCleatTxtObjects2.length = 0;
gdjs.MatchSwipeCode.GDCleatTxtObjects3.length = 0;
gdjs.MatchSwipeCode.GDScoreRedObjects1.length = 0;
gdjs.MatchSwipeCode.GDScoreRedObjects2.length = 0;
gdjs.MatchSwipeCode.GDScoreRedObjects3.length = 0;
gdjs.MatchSwipeCode.GDScoreRedTxtObjects1.length = 0;
gdjs.MatchSwipeCode.GDScoreRedTxtObjects2.length = 0;
gdjs.MatchSwipeCode.GDScoreRedTxtObjects3.length = 0;
gdjs.MatchSwipeCode.GDScoreBlueObjects1.length = 0;
gdjs.MatchSwipeCode.GDScoreBlueObjects2.length = 0;
gdjs.MatchSwipeCode.GDScoreBlueObjects3.length = 0;
gdjs.MatchSwipeCode.GDScoreBlueTxtObjects1.length = 0;
gdjs.MatchSwipeCode.GDScoreBlueTxtObjects2.length = 0;
gdjs.MatchSwipeCode.GDScoreBlueTxtObjects3.length = 0;
gdjs.MatchSwipeCode.GDDiscRedHighObjects1.length = 0;
gdjs.MatchSwipeCode.GDDiscRedHighObjects2.length = 0;
gdjs.MatchSwipeCode.GDDiscRedHighObjects3.length = 0;
gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects1.length = 0;
gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects2.length = 0;
gdjs.MatchSwipeCode.GDDiscRedHighSwipeObjects3.length = 0;
gdjs.MatchSwipeCode.GDDiscRedLowObjects1.length = 0;
gdjs.MatchSwipeCode.GDDiscRedLowObjects2.length = 0;
gdjs.MatchSwipeCode.GDDiscRedLowObjects3.length = 0;
gdjs.MatchSwipeCode.GDDiscRedLowSwipeObjects1.length = 0;
gdjs.MatchSwipeCode.GDDiscRedLowSwipeObjects2.length = 0;
gdjs.MatchSwipeCode.GDDiscRedLowSwipeObjects3.length = 0;
gdjs.MatchSwipeCode.GDHRObjects1.length = 0;
gdjs.MatchSwipeCode.GDHRObjects2.length = 0;
gdjs.MatchSwipeCode.GDHRObjects3.length = 0;
gdjs.MatchSwipeCode.GDLRObjects1.length = 0;
gdjs.MatchSwipeCode.GDLRObjects2.length = 0;
gdjs.MatchSwipeCode.GDLRObjects3.length = 0;
gdjs.MatchSwipeCode.GDDiscBlueObjects1.length = 0;
gdjs.MatchSwipeCode.GDDiscBlueObjects2.length = 0;
gdjs.MatchSwipeCode.GDDiscBlueObjects3.length = 0;
gdjs.MatchSwipeCode.GDHBObjects1.length = 0;
gdjs.MatchSwipeCode.GDHBObjects2.length = 0;
gdjs.MatchSwipeCode.GDHBObjects3.length = 0;
gdjs.MatchSwipeCode.GDLBObjects1.length = 0;
gdjs.MatchSwipeCode.GDLBObjects2.length = 0;
gdjs.MatchSwipeCode.GDLBObjects3.length = 0;
gdjs.MatchSwipeCode.GDTileRedObjects1.length = 0;
gdjs.MatchSwipeCode.GDTileRedObjects2.length = 0;
gdjs.MatchSwipeCode.GDTileRedObjects3.length = 0;
gdjs.MatchSwipeCode.GDTRObjects1.length = 0;
gdjs.MatchSwipeCode.GDTRObjects2.length = 0;
gdjs.MatchSwipeCode.GDTRObjects3.length = 0;
gdjs.MatchSwipeCode.GDTileBlueObjects1.length = 0;
gdjs.MatchSwipeCode.GDTileBlueObjects2.length = 0;
gdjs.MatchSwipeCode.GDTileBlueObjects3.length = 0;
gdjs.MatchSwipeCode.GDTBObjects1.length = 0;
gdjs.MatchSwipeCode.GDTBObjects2.length = 0;
gdjs.MatchSwipeCode.GDTBObjects3.length = 0;
gdjs.MatchSwipeCode.GDRollerRedObjects1.length = 0;
gdjs.MatchSwipeCode.GDRollerRedObjects2.length = 0;
gdjs.MatchSwipeCode.GDRollerRedObjects3.length = 0;
gdjs.MatchSwipeCode.GDRRObjects1.length = 0;
gdjs.MatchSwipeCode.GDRRObjects2.length = 0;
gdjs.MatchSwipeCode.GDRRObjects3.length = 0;
gdjs.MatchSwipeCode.GDRollerBlueObjects1.length = 0;
gdjs.MatchSwipeCode.GDRollerBlueObjects2.length = 0;
gdjs.MatchSwipeCode.GDRollerBlueObjects3.length = 0;
gdjs.MatchSwipeCode.GDRBObjects1.length = 0;
gdjs.MatchSwipeCode.GDRBObjects2.length = 0;
gdjs.MatchSwipeCode.GDRBObjects3.length = 0;
gdjs.MatchSwipeCode.GDAutonSelectorObjects1.length = 0;
gdjs.MatchSwipeCode.GDAutonSelectorObjects2.length = 0;
gdjs.MatchSwipeCode.GDAutonSelectorObjects3.length = 0;

gdjs.MatchSwipeCode.eventsList11(runtimeScene);
return;

}

gdjs['MatchSwipeCode'] = gdjs.MatchSwipeCode;
