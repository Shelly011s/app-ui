import React from "react";

import {
  DiagramEngine,
  DiagramModel,
  DefaultNodel,
  LinkModel,
  DiagramWidget,
  DefaultLinkModel
} from "@projectstorm/react-diagrams";

import { CanvasWidget } from '@projectstorm/react-canvas-core';

export default BasicConnection = () => {
  
    enableDrag = () => {
		const { engine } = this.props;
		const state = engine.getStateMachine().getCurrentState();
		state.dragCanvas.config.allowDrag = true;
	};

	disableDrag = () => {
		const { engine } = this.props;
		const state = engine.getStateMachine().getCurrentState();
		state.dragCanvas.config.allowDrag = false;
	};

  var engine = new DiagramEngine();
  engine.installDefaultFactories();

 
  var model = new DiagramModel();

  //3-A) create a default node
  var node1 = new DefaultNodel("Node 1", "rgb(0,192,255)");
  let port1 = node1.addOutPort("Out");
  node1.setPosition(100, 100);

 
  var node2 = new DefaultNodel("Node 2", "rgb(192,255,0)");
  let port2 = node2.addInPort("In");
  
  node2.setPosition(400, 100);

  // link the ports
  let link1 = port1.link(port2);
  

 
  model.addAll(node1, node2, link1);
  model.addListener({
    nodesUpdated: e => console.log("nodesUpdated", e),
    linksUpdated: e => console.log("linksUpdated", e),  
    offsetUpdated: e => console.log("offsetUpdated", e),
    entityRemoved: e => console.log("entityRemoved", e),
    selectionChanged: e => console.log("selectionChanged", e)
});
  
  engine.setDiagramModel(model);

 
  return (
  <>
  <button key={1} onClick={this.enableDrag}>Enable canvas drag</button>	                  
  <button key={2} onClick={this.disableDrag}>Disable canvas drag</button>
  <CanvasWidget className="srd--canvas" diagramEngine={engine} />
  </>
  );
};



