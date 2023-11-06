
var isstartedsimulation=false;

const check_button = document.getElementById('checkbutton');
const reset_button = document.getElementById('resetbutton');

const bread_but=document.getElementById("breadbutton");
const supply_but=document.getElementById("supplybutton");
const switch_but=document.getElementById("switchbutton");
const ic_but=document.getElementById("ic2button");
const r1_but=document.getElementById("resistancebutton");
const diode_but=document.getElementById("diodes");
const cap_but=document.getElementById("capacitor");


// Components hide show code here
function breadboard() {
    var x = document.getElementById("board");
    x.style.visibility = "visible";

    bread_but.disabled=true;
    bread_but.style.cursor="not-allowed";

    var instance = new BoardController();

    instance.setJsPlumbInstance(jsPlumb);
    instance.initDefault();
    instance.setCircuitContainer('mid');

    //breadboard definition 
    {
      
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r1',  [0, 0, 0, -1, 59,   24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r2',  [0, 0, 0, -1, 72.5, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r4',  [0, 0, 0, -1, 99.5, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r5',  [0, 0, 0, -1, 113,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r3',  [0, 0, 0, -1, 86,   24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r9',  [0, 0, 0, -1, 180.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r11', [0, 0, 0, -1, 221,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r8',  [0, 0, 0, -1, 167,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r6',  [0, 0, 0, -1, 140,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r10', [0, 0, 0, -1, 194,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r14', [0, 0, 0, -1, 261.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r15', [0, 0, 0, -1, 275,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r7',  [0, 0, 0, -1, 153.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r16', [0, 0, 0, -1, 302,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r12', [0, 0, 0, -1, 234.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r19', [0, 0, 0, -1, 342.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r20', [0, 0, 0, -1, 356,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r18', [0, 0, 0, -1, 329,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r21', [0, 0, 0, -1, 383,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r17', [0, 0, 0, -1, 315.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r13', [0, 0, 0, -1, 248,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r22', [0, 0, 0, -1, 398,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r23', [0, 0, 0, -1, 410,  24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r24', [0, 0, 0, -1, 423.5,24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row1', 'r25', [0, 0, 0, -1, 437, 24], 'blue');

        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r27', [0, 0, 0, 1, 72.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r26', [0, 0, 0, 1, 59, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r30', [0, 0, 0, 1, 113, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r28', [0, 0, 0, 1, 86, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r32', [0, 0, 0, 1, 153.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r31', [0, 0, 0, 1, 140, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r29', [0, 0, 0, 1, 99.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r35', [0, 0, 0, 1, 194, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r34', [0, 0, 0, 1, 180.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r36', [0, 0, 0, 1, 221, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r33', [0, 0, 0, 1, 167.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r37', [0, 0, 0, 1, 234.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r38', [0, 0, 0, 1, 248, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r39', [0, 0, 0, 1, 261.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r41', [0, 0, 0, 1, 302, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r40', [0, 0, 0, 1, 275, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r42', [0, 0, 0, 1, 315.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r43', [0, 0, 0, 1, 329, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r45', [0, 0, 0, 1, 356, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r44', [0, 0, 0, 1, 342.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r46', [0, 0, 0, 1, 383, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r47', [0, 0, 0, 1, 396.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r49', [0, 0, 0, 1, 423.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r50', [0, 0, 0, 1, 437, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row2', 'r48', [0, 0, 0, 1, 410, 38], 'blue');



        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r51', [0, 0, 0, -1, 478, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r52', [0, 0, 0, -1, 491.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r55', [0, 0, 0, -1, 532, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r54', [0, 0, 0, -1, 518.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r53', [0, 0, 0, -1, 505, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r56', [0, 0, 0, -1, 559, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r57', [0, 0, 0, -1, 572.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r58', [0, 0, 0, -1, 586, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r59', [0, 0, 0, -1, 599.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r61', [0, 0, 0, -1, 640, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r62', [0, 0, 0, -1, 653.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r60', [0, 0, 0, -1, 613, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r63', [0, 0, 0, -1, 667, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r64', [0, 0, 0, -1, 680.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r66', [0, 0, 0, -1, 721, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r67', [0, 0, 0, -1, 734.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r65', [0, 0, 0, -1, 694, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r68', [0, 0, 0, -1, 748, 24], 'blue');
        instance.addEndPoint('brown',4, 1,'board', 'row3', 'r69', [0, 0, 0, -1, 761.5, 24],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r72', [0, 0, 0, -1, 815.5, 24],'blue');
        instance.addEndPoint('brown',4, 1,'board', 'row3', 'r71', [0, 0, 0, -1, 802, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r70', [0, 0, 0, -1, 775, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r73', [0, 0, 0, -1, 829, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r75', [0, 0, 0, -1, 856, 24], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row3', 'r74', [0, 0, 0, -1, 842.5, 24],'blue');

          instance.addEndPoint('brown',4,1, 'board', 'row4', 'r77', [0, 0, 0, 1, 491.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r78', [0, 0, 0, 1, 505, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r81', [0, 0, 0, 1, 559, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r76', [0, 0, 0, 0, 478, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r82', [0, 0, 0, 1, 572.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r79', [0, 0, 0, 1, 518.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r80', [0, 0, 0, 1, 532, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r84', [0, 0, 0, 1, 599.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r86', [0, 0, 0, 1, 640, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r85', [0, 0, 0, 1, 613, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r87', [0, 0, 0, 1, 653.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r89', [0, 0, 0, 1, 680.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r88', [0, 0, 0, 1, 667, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r91', [0, 0, 0, 1, 721, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r83', [0, 0, 0, 1, 586, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r90', [0, 0, 0, 1, 694, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r92', [0, 0, 0, 1, 734.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r96', [0, 0, 0, 1, 802, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r95', [0, 0, 0, 1, 775, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r94', [0, 0, 0, 1, 761.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r93', [0, 0, 0, 1, 748, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r97', [0, 0, 0, 1, 815.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r99', [0, 0, 0, 1, 842.5, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r98', [0, 0, 0, 1, 829, 38], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row4', 'r100', [0, 0, 0, 1, 856, 38], 'blue');


        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r101', [0, 0, 0, -1, 59.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r102', [0, 0, 0, -1, 73, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r103', [0, 0, 0, -1, 86.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r104', [0, 0, 0, -1, 100, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r105', [0, 0, 0, -1, 113.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r106', [0, 0, 0, -1, 140.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r108', [0, 0, 0, -1, 167.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r110', [0, 0, 0, -1, 194.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r107', [0, 0, 0, -1, 154, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r109', [0, 0, 0, -1, 181, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r111', [0, 0, 0, -1, 221.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r112', [0, 0, 0, -1, 235, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r113', [0, 0, 0, -1, 248.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r115', [0, 0, 0, -1, 275.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r114', [0, 0, 0, -1, 262, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r117', [0, 0, 0, -1, 316, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r118', [0, 0, 0, -1, 329.5, 267],'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r116', [0, 0, 0, -1, 302.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r119', [0, 0, 0, -1, 343, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r120', [0, 0, 0, -1, 356.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r121', [0, 0, 0, -1, 383.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r122', [0, 0, 0, -1, 397, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r124', [0, 0, 0, -1, 424, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r123', [0, 0, 0, -1, 410.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row5', 'r125', [0, 0, 0, -1, 437.5, 267], 'blue');


        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r127', [0, 0, 0, 1, 73, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r126', [0, 0, 0, 1, 59.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r129', [0, 0, 0, 1, 100, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r128', [0, 0, 0, 1, 86.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r130', [0, 0, 0, 1, 113.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r131', [0, 0, 0, 1, 140.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r132', [0, 0, 0, 1, 154, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r133', [0, 0, 0, 1, 167.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r134', [0, 0, 0, 1, 181, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r136', [0, 0, 0, 1, 221.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r135', [0, 0, 0, 1, 194.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r137', [0, 0, 0, 1, 235, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r138', [0, 0, 0, 1, 248.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r140', [0, 0, 0, 1, 275.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r142', [0, 0, 0, 1, 316, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r139', [0, 0, 0, 1, 262, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r141', [0, 0, 0, 1, 302.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r143', [0, 0, 0, 1, 329.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r145', [0, 0, 0, 1, 356.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r144', [0, 0, 0, 1, 343, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r147', [0, 0, 0, 1, 397, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r146', [0, 0, 0, 1, 383.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r148', [0, 0, 0, 1, 410.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r149', [0, 0, 0, 1, 424, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row6', 'r150', [0, 0, 0, 1, 437.5, 281], 'blue');
 


        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r151', [0, 0, 0, -1, 478, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r152', [0, 0, 0, -1, 491.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r155', [0, 0, 0, -1, 532, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r153', [0, 0, 0, -1, 505, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r157', [0, 0, 0, -1, 572.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r156', [0, 0, 0, -1, 559, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r154', [0, 0, 0, -1, 518.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r160', [0, 0, 0, -1, 613, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r162', [0, 0, 0, -1, 653.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r161', [0, 0, 0, -1, 640, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r159', [0, 0, 0, -1, 599.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r158', [0, 0, 0, -1, 586, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r163', [0, 0, 0, -1, 667, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r164', [0, 0, 0, -1, 680.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r165', [0, 0, 0, -1, 694, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r166', [0, 0, 0, -1, 721, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r168', [0, 0, 0, -1, 748, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r167', [0, 0, 0, -1, 734.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r169', [0, 0, 0, -1, 761.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r170', [0, 0, 0, -1, 775, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r171', [0, 0, 0, -1, 802, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r172', [0, 0, 0, -1, 815.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r174', [0, 0, 0, -1, 842.5, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r173', [0, 0, 0, -1, 829, 267], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row7', 'r175', [0, 0, 0, -1, 856, 267], 'blue');

        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r176', [0, 0, 0, 0, 478, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r177', [0, 0, 0, -1, 491.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r180', [0, 0, 0, -1, 532, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r178', [0, 0, 0, -1, 505, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r182', [0, 0, 0, -1, 572.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r181', [0, 0, 0, -1, 559, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r179', [0, 0, 0, -1, 518.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r187', [0, 0, 0, -1, 653.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r183', [0, 0, 0, -1, 586, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r186', [0, 0, 0, -1, 640, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r185', [0, 0, 0, -1, 613, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r184', [0, 0, 0, -1, 599.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r188', [0, 0, 0, -1, 667, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r189', [0, 0, 0, -1, 680.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r191', [0, 0, 0, -1, 721, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r190', [0, 0, 0, -1, 694, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r192', [0, 0, 0, -1, 734.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r193', [0, 0, 0, -1, 748, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r194', [0, 0, 0, -1, 761.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r196', [0, 0, 0, -1, 802, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r195', [0, 0, 0, -1, 775, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r197', [0, 0, 0, -1, 815.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r198', [0, 0, 0, -1, 829, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r199', [0, 0, 0, -1, 842.5, 281], 'blue');
        instance.addEndPoint('brown',4,1, 'board', 'row8', 'r200', [0, 0, 0, -1, 856, 281], 'blue');

        
 
    }
}



function ic741() {
    var x = document.getElementById("ic741");
    x.style.visibility = "visible";

    ic_but.disabled=true;
    ic_but.style.cursor="not-allowed";

    var ic741 = new BoardController();
    ic741.setJsPlumbInstance(jsPlumb);
    ic741.setCircuitContainer('mid');

    {
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_8', 'ic741_81', [0, 0, 1, -1, 8, 5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_8', 'ic741_82', [0, 0, 1, -1, 8, 18.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_8', 'ic741_83', [0, 0, 1, -1, 8, 32], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_8', 'ic741_84', [0, 0, 1, -1, 8, 45.5], 'red');
  //      ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC5', [0, 0, 1, -1, 5, 54], 'red');

        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_7', 'ic741_71', [0, 0, 1, -1, 21.5, 5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_7', 'ic741_72', [0, 0, 1, -1, 21.5, 18.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_7', 'ic741_73', [0, 0, 1, -1, 21.5, 32], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_7', 'ic741_74', [0, 0, 1, -1, 21.5, 45.5], 'red');
     //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_6A', 'ic7404_6A05', [0, 0, 1, -1, 18.5, 54], 'red');

        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_6', 'ic741_61', [0, 0, 1, -1, 35, 5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_6', 'ic741_62', [0, 0, 1, -1, 35, 18.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_6', 'ic741_63', [0, 0, 1, -1, 35, 32], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_6', 'ic741_64', [0, 0, 1, -1, 35, 45.5], 'red');
   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_6Y', 'ic7404_6Y05', [0, 0, 1, -1, 32, 54], 'red');

        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_5', 'ic741_51', [0, 0, 1, -1, 48.5, 5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_5', 'ic741_52', [0, 0, 1, -1, 48.5, 18.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_5', 'ic741_53', [0, 0, 1, -1, 48.5, 32], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_5', 'ic741_54', [0, 0, 1, -1, 48.5, 45.5], 'red');
 
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_1', 'ic741_11', [0, 0, 1, -1, 8, 112.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_1', 'ic741_12', [0, 0, 1, -1, 8, 126], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_1', 'ic741_13', [0, 0, 1, -1, 8, 139.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_1', 'ic741_14', [0, 0, 1, -1, 8, 153], 'red');

   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y01', [0, 0, 1, -1, 18.5, 94], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_2', 'ic741_21', [0, 0, 1, -1, 21.5, 112.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_2', 'ic741_22', [0, 0, 1, -1, 21.5, 126], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_2', 'ic741_23', [0, 0, 1, -1, 21.5, 139.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_2', 'ic741_24', [0, 0, 1, -1, 21.5, 153], 'red');

      //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A01', [0, 0, 1, -1, 32, 94], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_3', 'ic741_31', [0, 0, 1, -1, 35, 112.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_3', 'ic741_32', [0, 0, 1, -1, 35, 126], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_3', 'ic741_33', [0, 0, 1, -1, 35, 139.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_3', 'ic741_34', [0, 0, 1, -1, 35, 153], 'red');
   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y01', [0, 0, 1, -1, 45.5, 94], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_4', 'ic741_41', [0, 0, 1, -1, 48.5, 112.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_4', 'ic741_42', [0, 0, 1, -1, 48.5, 126], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_4', 'ic741_43', [0, 0, 1, -1, 48.5, 139.5], 'red');
        ic741.addEndPoint('green',4.2,1, 'ic741', 'ic741_4', 'ic741_44', [0, 0, 1, -1, 48.5, 153], 'red');
        
   }
}



function ic7411() {
    var x = document.getElementById("ic7411");
    x.style.visibility = "visible";

    ic_but.disabled=true;
    ic_but.style.cursor="not-allowed";

    var ic7411 = new BoardController();
    ic7411.setJsPlumbInstance(jsPlumb);
    ic7411.setCircuitContainer('mid');

    {
     ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_8', 'ic7411_81', [0, 0, 1, -1, 8, 5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_8', 'ic7411_82', [0, 0, 1, -1, 8, 18.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_8', 'ic7411_83', [0, 0, 1, -1, 8, 32], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_8', 'ic7411_84', [0, 0, 1, -1, 8, 45.5], 'red');
  //      ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_VCC', 'ic7404_VCC5', [0, 0, 1, -1, 5, 54], 'red');

        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_7', 'ic7411_71', [0, 0, 1, -1, 21.5, 5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_7', 'ic7411_72', [0, 0, 1, -1, 21.5, 18.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_7', 'ic7411_73', [0, 0, 1, -1, 21.5, 32], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_7', 'ic7411_74', [0, 0, 1, -1, 21.5, 45.5], 'red');
     //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic71404_6A', 'ic7404_6A05', [0, 0, 1, -1, 18.5, 54], 'red');

        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_6', 'ic7411_61', [0, 0, 1, -1, 35, 5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_6', 'ic7411_62', [0, 0, 1, -1, 35, 18.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_6', 'ic7411_63', [0, 0, 1, -1, 35, 32], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_6', 'ic7411_64', [0, 0, 1, -1, 35, 45.5], 'red');
   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_6Y', 'ic7404_6Y05', [0, 0, 1, -1, 32, 54], 'red');

        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_5', 'ic7411_51', [0, 0, 1, -1, 48.5, 5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_5', 'ic7411_52', [0, 0, 1, -1, 48.5, 18.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_5', 'ic7411_53', [0, 0, 1, -1, 48.5, 32], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_5', 'ic7411_54', [0, 0, 1, -1, 48.5, 45.5], 'red');
 
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_1', 'ic7411_11', [0, 0, 1, -1, 8, 112.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_1', 'ic7411_12', [0, 0, 1, -1, 8, 126], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_1', 'ic7411_13', [0, 0, 1, -1, 8, 139.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_1', 'ic7411_14', [0, 0, 1, -1, 8, 153], 'red');

   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_1Y', 'ic7404_1Y01', [0, 0, 1, -1, 18.5, 94], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_2', 'ic7411_21', [0, 0, 1, -1, 21.5, 112.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_2', 'ic7411_22', [0, 0, 1, -1, 21.5, 126], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_2', 'ic7411_23', [0, 0, 1, -1, 21.5, 139.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_2', 'ic7411_24', [0, 0, 1, -1, 21.5, 153], 'red');

      //  ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2A', 'ic7404_2A01', [0, 0, 1, -1, 32, 94], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_3', 'ic7411_31', [0, 0, 1, -1, 35, 112.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_3', 'ic7411_32', [0, 0, 1, -1, 35, 126], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_3', 'ic7411_33', [0, 0, 1, -1, 35, 139.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_3', 'ic7411_34', [0, 0, 1, -1, 35, 153], 'red');

   //     ic7404.addEndPoint(4.2,1, 'ic7404', 'ic7404_2Y', 'ic7404_2Y01', [0, 0, 1, -1, 45.5, 94], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_4', 'ic7411_41', [0, 0, 1, -1, 48.5, 112.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_4', 'ic7411_42', [0, 0, 1, -1, 48.5, 126], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_4', 'ic7411_43', [0, 0, 1, -1, 48.5, 139.5], 'red');
        ic7411.addEndPoint('green',4.2,1, 'ic7411', 'ic7411_4', 'ic7411_44', [0, 0, 1, -1, 48.5, 153], 'red');
        
   }
}


function supply() {
    var x = document.getElementById("supply");
    x.style.visibility = "visible";
    
    supply_but.disabled=true;
    supply_but.style.cursor="not-allowed";

    var supply = new BoardController();
    supply.setJsPlumbInstance(jsPlumb);
    supply.setCircuitContainer('mid');
 
{
    supply.addEndPoint('red',7,2, 'supply', 'VCC', 'VCC1', [0, 0, 0,0, 83, 84], 'red');
    supply.addEndPoint('black',7,2, 'supply', 'GND', 'GND1', [0, 0, 0, 0, 140, 84], 'black');
     supply.addEndPoint('blue',7,2, 'supply', 'VEE', 'VEE1', [0, 0, 0, 0, 198, 84], 'blue');

   
}
}

function resistor1() {
    var x = document.getElementById("resistance1");
    x.style.visibility = "visible";

    r1_but.disabled=true;
    r1_but.style.cursor="not-allowed";

    var resistance1= new BoardController();
    resistance1.setJsPlumbInstance(jsPlumb);
    resistance1.setCircuitContainer('mid');
   // resistance1.makeDraggable('resistance1');
    //draggable('resistance1', 'mid');
{
    resistance1.addEndPoint('green',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C101', [0, 0, 1, -1, 11, -47], 'red');
    resistance1.addEndPoint('green',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C102', [0, 0, 1, -1, 11, -33], 'red');
    resistance1.addEndPoint('green',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C103', [0, 0, 1, -1, 11, -19], 'red');
    resistance1.addEndPoint('green',4.2,1, 'resistance1', 'resistance1_C1', 'resistance1_C104', [0, 0, 1, -1, 11, -5], 'red');

    resistance1.addEndPoint('green',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A101', [0, 0, 1, -1, 11, 61], 'red');
    resistance1.addEndPoint('green',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A102', [0, 0, 1, -1, 11, 75], 'red');
    resistance1.addEndPoint('green',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A103', [0, 0, 1, -1, 11, 89], 'red');
    resistance1.addEndPoint('green',4.2,1, 'resistance1', 'resistance1_A1', 'resistance1_A104', [0, 0, 1, -1, 11, 103], 'red');
    
}
}
function resistor2() {
    var x = document.getElementById("resistance2");
    x.style.visibility = "visible";
    var resistance2= new BoardController();
    resistance2.setJsPlumbInstance(jsPlumb);
    resistance2.setCircuitContainer('mid');
    //resistance2.makeDraggable('resistance2');
    //draggable('resistance2', 'mid');

    resistance2.addEndPoint('green',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C101', [0, 0, 1, -1, 11, -47], 'red');
    resistance2.addEndPoint('green',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C102', [0, 0, 1, -1, 11, -33], 'red');
    resistance2.addEndPoint('green',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C103', [0, 0, 1, -1, 11, -19], 'red');
    resistance2.addEndPoint('green',4.2,1, 'resistance2', 'resistance2_C1', 'resistance2_C104', [0, 0, 1, -1, 11, -5], 'red');

    resistance2.addEndPoint('green',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A101', [0, 0, 1, -1, 11, 61], 'red');
    resistance2.addEndPoint('green',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A102', [0, 0, 1, -1, 11, 75], 'red');
    resistance2.addEndPoint('green',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A103', [0, 0, 1, -1, 11, 89], 'red');
    resistance2.addEndPoint('green',4.2,1, 'resistance2', 'resistance2_A1', 'resistance2_A104', [0, 0, 1, -1, 11, 103], 'red');
    
}
function resistor3() {
    var x = document.getElementById("resistance3");
    x.style.visibility = "visible";
    var resistance3= new BoardController();
    resistance3.setJsPlumbInstance(jsPlumb);
    resistance3.setCircuitContainer('mid');
    //resistance3.makeDraggable('resistance3');
    //draggable('resistance3', 'mid');

    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C101', [0, 0, 1, -1, 11, -47], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C102', [0, 0, 1, -1, 11, -33], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C103', [0, 0, 1, -1, 11, -19], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_C1', 'resistance3_C104', [0, 0, 1, -1, 11, -5], 'red');

    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A101', [0, 0, 1, -1, 11, 61], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A102', [0, 0, 1, -1, 11, 75], 'red');
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A103', [0, 0, 1, -1, 11, 89], 'red'); 
    resistance3.addEndPoint('green',4.2,1, 'resistance3', 'resistance3_A1', 'resistance3_A104', [0, 0, 1, -1, 11, 103], 'red');

    
}
function resistor4() {
    var x = document.getElementById("resistance4");
    x.style.visibility = "visible";
    var resistance4= new BoardController();
    resistance4.setJsPlumbInstance(jsPlumb);
    resistance4.setCircuitContainer('mid');
   // resistance4.makeDraggable('resistance4');
    //draggable('resistance4', 'mid');

   resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C101', [0, 0, 1, -1, 11, -47], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C102', [0, 0, 1, -1, 11, -33], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C103', [0, 0, 1, -1, 11, -19], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_C1', 'resistance4_C104', [0, 0, 1, -1, 11, -5], 'red');

    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A101', [0, 0, 1, -1, 11, 61], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A102', [0, 0, 1, -1, 11, 75], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A103', [0, 0, 1, -1, 11, 89], 'red');
    resistance4.addEndPoint('green',4.2,1, 'resistance4', 'resistance4_A1', 'resistance4_A104', [0, 0, 1, -1, 11, 103], 'red');
  
    
}
function capacitor() {
var a=document.getElementById("capacitor1");
a.style.visibility="visible";

cap_but.disabled=true;
cap_but.style.cursor="not-allowed";

    var capacitor1= new BoardController();
   capacitor1.setJsPlumbInstance(jsPlumb);
   capacitor1.setCircuitContainer('mid');
    //capacitor1.makeDraggable('capacitor1');
    //draggable('capacitor1', 'mid');

   capacitor1.addEndPoint('green',4.2,1, 'capacitor1', 'capacitor1_C1', 'capacitor1_C101', [0, 0, 1, -1, 33,  77], 'red');
   capacitor1.addEndPoint('green',4.2,1, 'capacitor1', 'capacitor1_C1', 'capacitor1_C102', [0, 0, 1, -1, 33,  90], 'red');
   capacitor1.addEndPoint('green',4.2,1, 'capacitor1', 'capacitor1_C1', 'capacitor1_C103', [0, 0, 1, -1, 33, 104], 'red');
   capacitor1.addEndPoint('green',4.2,1, 'capacitor1', 'capacitor1_C1', 'capacitor1_C104', [0, 0, 1, -1, 33, 118], 'red');

   capacitor1.addEndPoint('green',4.2,1, 'capacitor1', 'capacitor1_A1', 'capacitor1_A101', [0, 0, 1, -1, 4,  77], 'red');
   capacitor1.addEndPoint('green',4.2,1, 'capacitor1', 'capacitor1_A1', 'capacitor1_A102', [0, 0, 1, -1, 4,  90], 'red');
   capacitor1.addEndPoint('green',4.2,1, 'capacitor1', 'capacitor1_A1', 'capacitor1_A103', [0, 0, 1, -1, 4, 104], 'red');
   capacitor1.addEndPoint('green',4.2,1, 'capacitor1', 'capacitor1_A1', 'capacitor1_A104', [0, 0, 1, -1, 4, 118], 'red');
   document.getElementById("checkbutton").disabled=false;
   
}
function diode1() {
    var x = document.getElementById("diode1");
    x.style.visibility = "visible";

    diode_but.disabled=true;
    diode_but.style.cursor="not-allowed";

    var diode1= new BoardController();
    diode1.setJsPlumbInstance(jsPlumb);
    diode1.setCircuitContainer('mid');
    //diode1.makeDraggable('diode1');
    //draggable('diode1', 'mid');

    diode1.addEndPoint('green',4.2,1, 'diode1', 'diode1_C1', 'diode1_C101', [0, 0, 1, -1, 8, -54], 'red');
    diode1.addEndPoint('green',4.2,1, 'diode1', 'diode1_C1', 'diode1_C102', [0, 0, 1, -1, 8, -40], 'red');
    diode1.addEndPoint('green',4.2,1, 'diode1', 'diode1_C1', 'diode1_C103', [0, 0, 1, -1, 8, -28], 'red');
    diode1.addEndPoint('green',4.2,1, 'diode1', 'diode1_C1', 'diode1_C104', [0, 0, 1, -1, 8, -12], 'red');

    diode1.addEndPoint('green',4.2,1, 'diode1', 'diode1_A1', 'diode1_A101', [0, 0, 1, -1, 8, 54], 'red');
    diode1.addEndPoint('green',4.2,1, 'diode1', 'diode1_A1', 'diode1_A102', [0, 0, 1, -1, 8, 68], 'red');
    diode1.addEndPoint('green',4.2,1, 'diode1', 'diode1_A1', 'diode1_A103', [0, 0, 1, -1, 8, 82], 'red');
    diode1.addEndPoint('green',4.2,1, 'diode1', 'diode1_A1', 'diode1_A104', [0, 0, 1, -1, 8, 96], 'red');

    
}
function diode2() {
    var x = document.getElementById("diode2");
    x.style.visibility = "visible";
    var diode2= new BoardController();
    diode2.setJsPlumbInstance(jsPlumb);
   diode2.setCircuitContainer('mid');
   //diode2.makeDraggable('diode2');
    //draggable('diode2', 'mid');

    diode2.addEndPoint('green',4.2,1, 'diode2', 'diode2_C1', 'diode2_C101', [0, 0, 1, -1, 8, -54], 'red');
    diode2.addEndPoint('green',4.2,1, 'diode2', 'diode2_C1', 'diode2_C102', [0, 0, 1, -1, 8, -40], 'red');
    diode2.addEndPoint('green',4.2,1, 'diode2', 'diode2_C1', 'diode2_C103', [0, 0, 1, -1, 8, -28], 'red');
    diode2.addEndPoint('green',4.2,1, 'diode2', 'diode2_C1', 'diode2_C104', [0, 0, 1, -1, 8, -12], 'red');

    diode2.addEndPoint('green',4.2,1, 'diode2', 'diode2_A1', 'diode2_A101', [0, 0, 1, -1, 8, 54], 'red');
    diode2.addEndPoint('green',4.2,1, 'diode2', 'diode2_A1', 'diode2_A102', [0, 0, 1, -1, 8, 68], 'red');
    diode2.addEndPoint('green',4.2,1, 'diode2', 'diode2_A1', 'diode2_A103', [0, 0, 1, -1, 8, 82], 'red');
    diode2.addEndPoint('green',4.2,1, 'diode2', 'diode2_A1', 'diode2_A104', [0, 0, 1, -1, 8, 96], 'red');

    
}
function cro1() {
    var x = document.getElementById("cro");
    x.style.visibility = "visible";

    switch_but.disabled=true;
    switch_but.style.cursor="not-allowed";

    var cro= new BoardController();
    cro.setJsPlumbInstance(jsPlumb);
    cro.setCircuitContainer('mid');
    
    cro.addEndPoint('black',6,1, 'cro', 'cro_C1', 'cro_C101', [0, 0, 0, 0, 172, 155], 'black');

}

function disabledButton()
{

    

  if(window.getComputedStyle(document.getElementById('board')).visibility === "visible" && window.getComputedStyle(document.getElementById('cro')).visibility === "visible" && 
   window.getComputedStyle(document.getElementById('diode1')).visibility === "visible" && window.getComputedStyle(document.getElementById('supply')).visibility === "visible" && 
  window.getComputedStyle(document.getElementById('capacitor1')).visibility === "visible" && window.getComputedStyle(document.getElementById('resistance1')).visibility === "visible" && window.getComputedStyle(document.getElementById('ic741')).visibility === "visible" )
  {
   
  check_button.disabled=false; 
  }
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it

        
    window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");

 

       breadboard();
       diode1();
       diode2();
       ic741();
       ic7411();
       supply();
       resistor3();
       resistor1();
       resistor2();
       resistor4();
       capacitor();
       cro1();
    }
}

function resetCircuit() {
     if(confirm("Do you want to reset?")){
           sessionStorage.setItem("reloading", "true");
           document.location.reload();  
        }
 
}


       
function  addtable()
{
         
 var a=prompt("Enter the experimental frequency in Hz");
if(a>= 51&& a<=66.8)
{alert("Correct Result");
  var g=document.getElementById("mytable");
      g.style.visibility="visible";
    var h=document.getElementById("mytable1");
      h.style.visibility="visible";
      var p=document.getElementById("p");
    var q=document.getElementById("q");
   
       p.innerHTML=a +"Hz";
       q.innerHTML="56.8Hz";
      

   }
   else
    {alert("Wrong result.Re-measure the frequency.");}

    
       }

