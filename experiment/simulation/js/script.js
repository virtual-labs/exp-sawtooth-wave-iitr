
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
            connectorStyle :{strokeStyle:stroke, lineWidth:3}

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
  



function checkCircuit1() {
   
    var g = new Graph(35);

  
  
    var groups = ['row2','row3','row4','row6','row7','row8','resistance1_C1','resistance1_A1','resistance2_C1','resistance2_A1','power1_VCC','VEE1','power2_VCC','power3_VCC','power1_GND','power2_GND','power3_GND','resistance3_C1','resistance3_A1','resistance4_C1','resistance4_A1','multimeter_VCC','multimeter_GND'  ,'VEE','VCC', 'GND', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'row1', 'row3', 'row5', 'row7'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   
   
    if(g.isConnected("ic741_7","VCC")){
        console.log("IC 741 connected to supply");
       
        if(g.isConnected("multimeter_GND","GND")){
            console.log("multimeter connected to supply")
           
                if(g.isConnected("ic741_4","VEE")){
            console.log("4  connected to supply")
             if(g.isConnected("ic741_3","GND")){
            console.log("3 connected to supply")
               if(g.isConnected("ic741_6","multimeter_VCC")){
            console.log("multimeter connected to supply")
                  if(g.isConnected("power3_GND","GND")&&g.isConnected("power2_GND","GND")&&g.isConnected("power1_GND","GND")){
            console.log(" connected to supply")

              if  (((g.isConnected("ic741_2","resistance1_C1")&&g.isConnected("power1_VCC","resistance1_A1"))||(g.isConnected("ic741_2","resistance1_A1")&&g.isConnected("power1_VCC","resistance1_C1")))
              	&&((g.isConnected("ic741_2","resistance2_C1")&&g.isConnected("power2_VCC","resistance2_A1"))||(g.isConnected("ic741_2","resistance2_A1")&&g.isConnected("power2_VCC","resistance2_C1")))
              	&&((g.isConnected("ic741_2","resistance3_C1")&&g.isConnected("power3_VCC","resistance3_A1"))||(g.isConnected("ic741_2","resistance3_A1")&&g.isConnected("power3_VCC","resistance3_C1")))
              	&&((g.isConnected("ic741_2","resistance4_C1")&&g.isConnected("ic741_6","resistance4_A1"))||(g.isConnected("ic741_6","resistance4_C1")&&g.isConnected("ic741_2","resistance4_A1")))
              	){alert("Connection successful");theorem1=true;
              	document.getElementById("checkbutton").disabled=true;
              	document.getElementById("startbutton").disabled=false;

              	document.getElementById("addtable").disabled=false;

            
            

            
            }else if(theorem1 != true){
                alert("Wrong Connections.");
            }
            }else{
            alert("Connect digital supplies properly.");
      }  
      }else{
            alert("Connect multimeter poperly.");
      }  
      }else{
            alert("Connect Pin 3 to ground.");
      }  
            }
            else{
            alert("Connect Pin 4 to VEE properly.");
      } 
            
            
        }else{
            alert("Multimeter not connected to GND.");
      }
    }else{
        alert("Connect pin 7 to VCC properly.");
    }


console.log("executed")
}


function checkCircuit2() {
   
    var g = new Graph(35);

  
  
    var groups = ['row2','row3','row4','row6','row7','row8','resistance5_C1','resistance5_A1','resistance6_C1','resistance6_A1','power1_VCC','VEE1','power2_VCC','power1_GND','power2_GND','resistance7_C1','resistance7_A1','resistance4_C1','resistance4_A1','multimeter_VCC','multimeter_GND'  ,'VEE','VCC', 'GND', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'row1', 'row3', 'row5', 'row7'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   
    

    if(g.isConnected("ic741_7","VCC")){
        console.log("IC 741 connected to supply");
        if(g.isConnected("multimeter_GND","GND")){
            console.log("multimeter connected to supply")
           
                
                if(g.isConnected("ic741_4","VEE")){

            console.log("4  connected to supply")
             
               if(g.isConnected("ic741_6","multimeter_VCC")){
            console.log("multimeter connected to supply")
                  if(g.isConnected("power2_GND","GND")&&g.isConnected("power1_GND","GND")){
            console.log(" connected to supply")

              if  (((g.isConnected("ic741_2","resistance4_C1")&&g.isConnected("power1_VCC","resistance4_A1"))||(g.isConnected("ic741_2","resistance4_A1")&&g.isConnected("power1_VCC","resistance4_C1")))
              	&&((g.isConnected("ic741_3","resistance5_C1")&&g.isConnected("power2_VCC","resistance5_A1"))||(g.isConnected("ic741_3","resistance5_A1")&&g.isConnected("power2_VCC","resistance5_C1")))
              	&&((g.isConnected("ic741_3","resistance7_C1")&&g.isConnected("GND","resistance7_A1"))||(g.isConnected("ic741_3","resistance7_A1")&&g.isConnected("GND","resistance7_C1")))
              	&&((g.isConnected("ic741_2","resistance6_C1")&&g.isConnected("ic741_6","resistance6_A1"))||(g.isConnected("ic741_6","resistance6_C1")&&g.isConnected("ic741_2","resistance6_A1")))
              	){alert("Connection successful");theorem1=true;
            document.getElementById("checkbutton").disabled=true;
              	document.getElementById("startbutton").disabled=false;

              	document.getElementById("addtable").disabled=false;
            

            
            }else if(theorem1 != true){
                alert("Wrong Connections");
            }
            }else{
            alert("Connect digital supplies properly.");
      }  
      }else{
            alert("Connect multimeter poperly.");
      }  
     
            }
            else{
            alert("Connect Pin 4 to VEE properly.");
      } 
            
            
        }else{
            alert("Multimeter not connected to GND.");
      }
    }else{
        alert("Connect Pin 7 to VCC properly.");
    }


console.log("executed")
}

function checkCircuit4() {
   
    var g = new Graph(37);

  
  
    var groups = ['power4_VCC','power4_GND','row2','row3','row4','row6','row7','row8','resistance1_C1','resistance1_A1','resistance2_C1','resistance2_A1','VEE1','power2_VCC','power2_GND','resistance4_C1','resistance4_A1','multimeter_VCC','multimeter_GND'  ,'VEE','VCC', 'GND', 'ic741_5', 'ic741_6', 'ic741_7', 'ic741_8', 'ic741_1', 'ic741_3', 'ic741_2', 'ic741_4', 'row1', 'row3', 'row5', 'row7'];
    
    console.log(groups.length)
    for (var i = 0; i < groups.length; i++) { //inserting groups vertexes
        g.addVertex(groups[i]);
    }

    for (key in connections) {  // adding edges
        g.addEdge(connections[key].endpoints[0].getParameter('groupName'), connections[key].endpoints[1].getParameter('groupName'));
    }
   
    

    if(g.isConnected("ic741_7","VCC")){
        console.log("IC 741 connected to supply");
        if(g.isConnected("multimeter_GND","GND")){
            console.log("multimeter connected to supply")
           
               
                if(g.isConnected("ic741_4","VEE")){

            console.log("4  connected to supply")
        
               if(g.isConnected("ic741_6","multimeter_VCC")){
            console.log("multimeter connected to supply")
                  if(g.isConnected("power2_GND","GND")){
            console.log(" connected to supply")

              if  (((g.isConnected("ic741_2","resistance4_C1")&&g.isConnected("power2_VCC","resistance4_A1"))||(g.isConnected("ic741_2","resistance4_A1")&&g.isConnected("power2_VCC","resistance4_C1")))
              	&&((g.isConnected("ic741_3","resistance2_C1")&&g.isConnected("GND","resistance2_A1"))||(g.isConnected("ic741_3","resistance2_A1")&&g.isConnected("GND","resistance2_C1")))
              	&&((g.isConnected("ic741_2","power4_VCC")&&g.isConnected("ic741_6","power4_GND"))||(g.isConnected("ic741_6","power4_VCC")&&g.isConnected("ic741_2","power4_GND")))
              	){alert("Connection successful");theorem1=true;
            document.getElementById("checkbutton").disabled=true;
              	document.getElementById("startbutton").disabled=false;

              	document.getElementById("addtable").disabled=false;
            

            
            }else if(theorem1 != true){
                alert("Wrong Connections");
            }
            }else{
            alert("Connect digital supplies properly.");
      }  
      }else{
            alert("Connect multimeter poperly.");
      }  
      
            }
            else{
            alert("Connect Pin 4 to VEE properly.");
      } 
            
            
        }else{
            alert("Multimeter not connected to GND.");
      }
    }else{
        alert("Connect Pin 7 to VCC properly.");
    }


console.log("executed")
}

