var console = require("console");

function PriorityQueue(){
	this.heap = [];// = new Array();
	this.end = 0;
}

PriorityQueue.prototype.swap = function(index1, index2){
	var temp = this.heap[index1];
	this.heap[index1] = this.heap[index2];
	this.heap[index2] = temp;
}

PriorityQueue.prototype.getParent = function(index){
	return ~~((index-1)/2);
}

PriorityQueue.prototype.getChildLeft = function(index){
	return index*2+1;
}

PriorityQueue.prototype.getChildRight = function(index){
	return index*2+2;
}

PriorityQueue.prototype.heapify = function(index){
	if(index == 0) {
		console.log("heapify reached the root");
		return; //Root
	}
		
	var parent = this.getParent(index);
	
	if(this.heap[parent] > this.heap[index]){
		this.swap(parent, index);
		this.heapify(parent);
	} else {
		return;
	}
}

PriorityQueue.prototype.insert = function(element){
	console.log("Inserting element at [" + this.end + "]");
	this.heap[this.end] = element; 
	this.heapify(this.end);
	this.end += 1;
}

PriorityQueue.prototype.toString = function(){
	var output = "Results: ";
	for( var i = 0; i < this.end; i+=1){
		output += this.heap[i] + ", ";
	}
	return output;
}

function main(){
	console.log("Creating heap.\r\n");
	var pq = new PriorityQueue();
	console.log("Inserting 10, 15, 3, 7, 12, 1, 4!\r\n");
	pq.insert(10);
	pq.insert(15);
	pq.insert(3);
	pq.insert(7);
	pq.insert(12);
	pq.insert(1);
	pq.insert(4);
	console.log(pq.toString());
}

main();
