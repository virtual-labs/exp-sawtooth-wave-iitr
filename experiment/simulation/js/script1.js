
var connections = [];



 var jsPlumbInstance = null;
 
function BoardController() {
   
    var endPoints = [];

    this.setJsPlumbInstance = function (instance) {
        jsPlumbInstance = instance;
    };

    this.setCircuitContainer = function (drawingContainer) {
        jsPlumbInstance.Defaults.Container = drawingContainer;
    };

    this.initDefault = function () {

        jsPlumbInstance.importDefaults({
            Connector: ["Bezier", { curviness: 20 }],
            PaintStyle: { strokeStyle: 'blue', lineWidth: 3 },
            EndpointStyle: { radius: 4, fillStyle: 'blue' },

            HoverPaintStyle: { strokeStyle: "#728C00" }
        });

        jsPlumbInstance.bind("beforeDrop", function (params) {
            var sourceEndPoint = params.connection.endpoints[0];
            var targetEndPoint = params.dropEndpoint;
            if (!targetEndPoint || !sourceEndPoint) {
                return false;
            }
            var sourceEndPointgroup = sourceEndPoint.getParameter('groupName');
            var targetEndPointgroup = targetEndPoint.getParameter('groupName');

            if (sourceEndPointgroup == targetEndPointgroup) {
                alert("Already connected internally");
                return false;
            } else {
                return true;
            }
        });

        jsPlumbInstance.bind("dblclick", function (conn) {
            jsPlumb.detach(conn);
            return false;
        });
     

        jsPlumbInstance.bind("jsPlumbConnection", function (conn) {
            var source = conn.connection.endpoints[0].getParameter('endPointName')
            connections[source] = conn.connection;

        });
    };

    this.addEndPoint = function (stroke,radius,maxConnection, divID, groupName, endPointName, anchorArray,color) {
        var endpointOptions = {
            isSource: true,
            isTarget: true,
            anchor: anchorArray,
            maxConnections: maxConnection,
            parameters: {
                "divID": divID,
                "endPointName": endPointName,
                "groupName": groupName,
                "type": 'output',
                "acceptType": 'input'
            },
            
            paintStyle: { radius: radius, fillStyle: color },
            connectorStyle:{strokeStyle:stroke, lineWidth:3}

        };

        jsPlumbInstance.addEndpoint(divID, endpointOptions);

        setEndpoint(endPointName, endpointOptions);
    };

    var setEndpoint = function (endPointName, endpointOptions) {
        endPoints[endPointName] = {
            "endPointName": endpointOptions.parameters.endPointName,
            "groupName": endpointOptions.parameters.groupName,
            "divID": endpointOptions.parameters.divID
        };

    };

    this.makeDraggable = function (selector) {
        jsPlumbInstance.draggable(selector, {
            stop: function () {
                var x = $(selector).position().left;
                jsPlumbInstance.repaint(selector);
            }
        });
    };


}


function draggable(item, container) {
    var dragItem = document.querySelector("#" + item);
    var container = document.querySelector("#" + container);

    var active = false;
    var currentX;
    var currentY;
    var initialX;
    var initialY;
    var xOffset = 0;
    var yOffset = 0;

    container.addEventListener("touchstart", dragStart, false);
    container.addEventListener("touchend", dragEnd, false);
    container.addEventListener("touchmove", drag, false);

    container.addEventListener("mousedown", dragStart, false);
    container.addEventListener("mouseup", dragEnd, false);
    container.addEventListener("mousemove", drag, false);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target === dragItem) {
            active = true;
        }
    }

    function dragEnd(e) {
        initialX = currentX;
        initialY = currentY;

        active = false;
    }

    function drag(e) {
        if (active) {

            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    }
} 



var theorem1=false;
  

function checkCircuit() {
   
    var g = new Graph(45);
  
  
    var groups = ['row2','row4','row3','row6','row7','row8','resistance1_C1','resistance1_A1','resistance2_C1','resistance2_A1','resistance3_C1','resistance3_A1','resistance4_C1','resistance4_A1','capacitor1_C1','capacitor1_A1','diode1_C1','diode1_A1','diode2_C1','diode2_A1','cro_C1','VCC', 'GND','VEE','VEE1', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'ic7411_5', 'ic7411_6', 'ic7411_7', 'ic7411_8', 'ic7411_1', 'ic7411_3', 'ic7411_2', 'ic7411_4', 'row1', 'row5'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   
console.log("###noofedges->"+g.numberofedges);

        if(g.isConnected("VCC","ic741_7"))
                {
                console.log("IC 741 connected to supply");
            if(g.isConnected("ic741_4","VEE")){
        console.log("IC 741 connected to supply");
      
            if(g.isConnected("ic7411_4","VEE"))
                {
        console.log("IC 741 connected to supply");
            if(g.isConnected("VCC","ic7411_7")){
            console.log("ic 2 not  connected to supply");

              if  (g.isConnected("ic741_2","GND")&&g.isConnected("ic741_6","diode1_A1")&&g.isConnected("ic741_6","diode2_C1")
                &&((g.isConnected("resistance1_C1","diode1_C1")&&g.isConnected("resistance1_A1","ic7411_2"))||(g.isConnected("resistance1_A1","diode1_C1")&&g.isConnected("resistance1_C1","ic7411_2")))
                &&((g.isConnected("resistance2_C1","diode2_A1")&&g.isConnected("resistance2_A1","ic7411_2"))||(g.isConnected("resistance2_A1","diode2_A1")&&g.isConnected("resistance2_C1","ic7411_2")))
                
                &&((g.isConnected("resistance3_C1","ic741_3")&&g.isConnected("resistance3_A1","ic741_6"))||(g.isConnected("resistance3_A1","ic741_3")&&g.isConnected("resistance3_C1","ic741_6")))
                &&((g.isConnected("resistance4_C1","ic741_3")&&g.isConnected("resistance4_A1","ic7411_6"))||(g.isConnected("resistance4_A1","ic741_3")&&g.isConnected("resistance4_C1","ic7411_6")))
                &&((g.isConnected("capacitor1_C1","ic7411_2")&&g.isConnected("capacitor1_A1","ic7411_6"))||(g.isConnected("capacitor1_A1","ic7411_2")&&g.isConnected("capacitor1_C1","ic7411_6")))
       
                &&g.isConnected("ic7411_3","GND")&&g.isConnected("ic7411_6","cro_C1")
                ){alert("Right Connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("addtable").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
            }
          else  if  (g.isConnected("ic741_2","GND")&&g.isConnected("ic741_6","diode1_A1")&&g.isConnected("ic741_6","diode2_C1")
                &&((g.isConnected("resistance1_C1","diode1_C1")&&g.isConnected("resistance1_A1","ic7411_2"))||(g.isConnected("resistance1_A1","diode1_C1")&&g.isConnected("resistance1_C1","ic7411_2")))
                &&((g.isConnected("resistance2_C1","diode2_A1")&&g.isConnected("resistance2_A1","ic7411_2"))||(g.isConnected("resistance2_A1","diode2_A1")&&g.isConnected("resistance2_C1","ic7411_2")))
                
                &&((g.isConnected("resistance3_C1","ic741_3")&&g.isConnected("resistance3_A1","ic741_6"))||(g.isConnected("resistance3_A1","ic741_3")&&g.isConnected("resistance3_C1","ic741_6")))
                &&((g.isConnected("resistance4_C1","ic741_3")&&g.isConnected("resistance4_A1","ic7411_6"))||(g.isConnected("resistance4_A1","ic741_3")&&g.isConnected("resistance4_C1","ic7411_6")))
                &&(((g.isConnected("capacitor1_C1","resistance1_C1")&&g.isConnected("capacitor1_A1","ic7411_6"))||(g.isConnected("capacitor1_A1","resistance1_C1")&&g.isConnected("capacitor1_C1","ic7411_6")))||((g.isConnected("capacitor1_C1","resistance1_A1")&&g.isConnected("capacitor1_A1","ic7411_6"))||(g.isConnected("capacitor1_A1","resistance1_A1")&&g.isConnected("capacitor1_C1","ic7411_6"))))
       
                &&g.isConnected("ic7411_3","GND")&&g.isConnected("ic7411_6","cro_C1")
                ){alert("Right Connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("addtable").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
            }
            else  if  (g.isConnected("ic741_2","GND")&&g.isConnected("ic741_6","diode1_A1")&&g.isConnected("ic741_6","diode2_C1")
                &&((g.isConnected("resistance1_C1","diode1_C1")&&g.isConnected("resistance1_A1","ic7411_2"))||(g.isConnected("resistance1_A1","diode1_C1")&&g.isConnected("resistance1_C1","ic7411_2")))
                &&((g.isConnected("resistance2_C1","diode2_A1")&&g.isConnected("resistance2_A1","ic7411_2"))||(g.isConnected("resistance2_A1","diode2_A1")&&g.isConnected("resistance2_C1","ic7411_2")))
                
                &&((g.isConnected("resistance3_C1","ic741_3")&&g.isConnected("resistance3_A1","ic741_6"))||(g.isConnected("resistance3_A1","ic741_3")&&g.isConnected("resistance3_C1","ic741_6")))
                &&((g.isConnected("resistance4_C1","ic741_3")&&g.isConnected("resistance4_A1","ic7411_6"))||(g.isConnected("resistance4_A1","ic741_3")&&g.isConnected("resistance4_C1","ic7411_6")))
                &&(((g.isConnected("capacitor1_C1","resistance2_C1")&&g.isConnected("capacitor1_A1","ic7411_6"))||(g.isConnected("capacitor1_A1","resistance2_C1")&&g.isConnected("capacitor1_C1","ic7411_6")))||((g.isConnected("capacitor1_C1","resistance2_A1")&&g.isConnected("capacitor1_A1","ic7411_6"))||(g.isConnected("capacitor1_A1","resistance2_A1")&&g.isConnected("capacitor1_C1","ic7411_6"))))
       
                &&g.isConnected("ic7411_3","GND")&&g.isConnected("ic7411_6","cro_C1")
                ){alert("Right Connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("addtable").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
            }



            else  if  (g.isConnected("ic7411_2","GND")&&g.isConnected("ic7411_6","diode1_A1")&&g.isConnected("ic7411_6","diode2_C1")
                &&((g.isConnected("resistance1_C1","diode1_C1")&&g.isConnected("resistance1_A1","ic741_2"))||(g.isConnected("resistance1_A1","diode1_C1")&&g.isConnected("resistance1_C1","ic741_2")))
                &&((g.isConnected("resistance2_C1","diode2_A1")&&g.isConnected("resistance2_A1","ic741_2"))||(g.isConnected("resistance2_A1","diode2_A1")&&g.isConnected("resistance2_C1","ic741_2")))
                
                &&((g.isConnected("resistance3_C1","ic7411_3")&&g.isConnected("resistance3_A1","ic7411_6"))||(g.isConnected("resistance3_A1","ic7411_3")&&g.isConnected("resistance3_C1","ic7411_6")))
                &&((g.isConnected("resistance4_C1","ic7411_3")&&g.isConnected("resistance4_A1","ic741_6"))||(g.isConnected("resistance4_A1","ic7411_3")&&g.isConnected("resistance4_C1","ic741_6")))
                &&((g.isConnected("capacitor1_C1","ic741_2")&&g.isConnected("capacitor1_A1","ic741_6"))||(g.isConnected("capacitor1_A1","ic741_2")&&g.isConnected("capacitor1_C1","ic741_6")))
       
                &&g.isConnected("ic741_3","GND")&&g.isConnected("ic741_6","cro_C1")
                ){alert("Right Connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("addtable").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
            } 
  else  if  (g.isConnected("ic7411_2","GND")&&g.isConnected("ic7411_6","diode1_A1")&&g.isConnected("ic7411_6","diode2_C1")
                &&((g.isConnected("resistance1_C1","diode1_C1")&&g.isConnected("resistance1_A1","ic741_2"))||(g.isConnected("resistance1_A1","diode1_C1")&&g.isConnected("resistance1_C1","ic741_2")))
                &&((g.isConnected("resistance2_C1","diode2_A1")&&g.isConnected("resistance2_A1","ic741_2"))||(g.isConnected("resistance2_A1","diode2_A1")&&g.isConnected("resistance2_C1","ic741_2")))
                
                &&((g.isConnected("resistance3_C1","ic7411_3")&&g.isConnected("resistance3_A1","ic7411_6"))||(g.isConnected("resistance3_A1","ic7411_3")&&g.isConnected("resistance3_C1","ic7411_6")))
                &&((g.isConnected("resistance4_C1","ic7411_3")&&g.isConnected("resistance4_A1","ic741_6"))||(g.isConnected("resistance4_A1","ic7411_3")&&g.isConnected("resistance4_C1","ic741_6")))
                &&(((g.isConnected("capacitor1_C1","resistance1_C1")&&g.isConnected("capacitor1_A1","ic741_6"))||(g.isConnected("capacitor1_A1","resistance1_C1")&&g.isConnected("capacitor1_C1","ic741_6")))||((g.isConnected("capacitor1_C1","resistance1_A1")&&g.isConnected("capacitor1_A1","ic741_6"))||(g.isConnected("capacitor1_A1","resistance1_A1")&&g.isConnected("capacitor1_C1","ic741_6"))))
       
                &&g.isConnected("ic741_3","GND")&&g.isConnected("ic741_6","cro_C1")
                ){alert("Right Connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("addtable").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
            }
              else  if  (g.isConnected("ic7411_2","GND")&&g.isConnected("ic7411_6","diode1_A1")&&g.isConnected("ic7411_6","diode2_C1")
                &&((g.isConnected("resistance1_C1","diode1_C1")&&g.isConnected("resistance1_A1","ic741_2"))||(g.isConnected("resistance1_A1","diode1_C1")&&g.isConnected("resistance1_C1","ic741_2")))
                &&((g.isConnected("resistance2_C1","diode2_A1")&&g.isConnected("resistance2_A1","ic741_2"))||(g.isConnected("resistance2_A1","diode2_A1")&&g.isConnected("resistance2_C1","ic741_2")))
                
                &&((g.isConnected("resistance3_C1","ic7411_3")&&g.isConnected("resistance3_A1","ic7411_6"))||(g.isConnected("resistance3_A1","ic7411_3")&&g.isConnected("resistance3_C1","ic7411_6")))
                &&((g.isConnected("resistance4_C1","ic7411_3")&&g.isConnected("resistance4_A1","ic741_6"))||(g.isConnected("resistance4_A1","ic7411_3")&&g.isConnected("resistance4_C1","ic741_6")))
                &&(((g.isConnected("capacitor1_C1","resistance2_C1")&&g.isConnected("capacitor1_A1","ic741_6"))||(g.isConnected("capacitor1_A1","resistance2_C1")&&g.isConnected("capacitor1_C1","ic741_6")))||((g.isConnected("capacitor1_C1","resistance2_A1")&&g.isConnected("capacitor1_A1","ic741_6"))||(g.isConnected("capacitor1_A1","resistance2_A1")&&g.isConnected("capacitor1_C1","ic741_6"))))
       
                &&g.isConnected("ic741_3","GND")&&g.isConnected("ic741_6","cro_C1")
                ){alert("Right Connections.");theorem1=true;document.getElementById("startbutton").disabled=false;document.getElementById("addtable").disabled=false;document.getElementById("resetbutton").disabled=false;document.getElementById("checkbutton").disabled=true;
            }
            
            else if(theorem1 != true){
                document.getElementById("resetbutton").disabled=false;
                alert("Wrong Connections.");
            }  
            }else{
                document.getElementById("resetbutton").disabled=false;
            alert("IC-2  is not connected to VCC properly.")
      }
  }else{
    document.getElementById("resetbutton").disabled=false;
            alert("IC-2 is not connected to VEE properly.")
      }
     } else{
        document.getElementById("resetbutton").disabled=false;
            alert("IC-1 is not connected to VEE properly.")
      }
        
    }else{
        document.getElementById("resetbutton").disabled=false;
        alert("IC-1  is not connected to VCC properly");
    }
    


console.log("executed")
}

