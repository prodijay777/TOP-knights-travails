(()=>{let e=new class{constructor(e){this.numVertices=e,this.AdjList=new Map}addVertex(e){this.AdjList.set(e,[])}getVertex(e,t){for(let[o,s]of this.AdjList)if(e===o[0]&&t===o[1])return[o,s]}addEdge(e,t){this.AdjList.get(e).push(t)}printGraph(){let e=this.AdjList.keys();for(let t of e)this.AdjList.get(t);for(let e of getValues)conc+=e+" ";console.log(i+" -> "+conc)}}(64),t=[];for(let e=0;e<8;e++)for(let o=0;o<8;o++){let s=[e,o];t.push(s)}for(v of t)e.addVertex(v);for(v of t)if(v[0]+2<8&&v[1]+1<8){let t=e.getVertex(v[0]+2,v[1]+1)[0];console.log(t),e.addEdge(v,t)}console.log(e),console.log(e.getVertex(2,2)),console.log(e.getVertex(4,3)),function(t,o){let[s,l]=e.getVertex(t[0],t[1]);!function(t,o,s=[],l=[]){if(t!==o){{let[o,r]=e.getVertex(t[0],t[1]);s.push(o),l.push(o)}console.log(s)}}(s,[6,6])}([2,2])})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiTUEyQ0EsSUFBSUEsRUFBVyxJQXJDZixNQUNJLFdBQUFDLENBQVlDLEdBQ1JDLEtBQUtELFlBQWNBLEVBQ25CQyxLQUFLQyxRQUFVLElBQUlDLEdBQ3ZCLENBRUEsU0FBQUMsQ0FBVUMsR0FDTkosS0FBS0MsUUFBUUksSUFBSUQsRUFBRyxHQUN4QixDQUVBLFNBQUFFLENBQVVDLEVBQUtDLEdBQ1gsSUFBSyxJQUFLQyxFQUFLQyxLQUFVVixLQUFLQyxRQUMxQixHQUFJTSxJQUFRRSxFQUFJLElBQU1ELElBQVFDLEVBQUksR0FFOUIsTUFBTyxDQUFDQSxFQUFLQyxFQUd6QixDQUVBLE9BQUFDLENBQVFQLEVBQUdRLEdBQ1BaLEtBQUtDLFFBQVFZLElBQUlULEdBQUdVLEtBQUtGLEVBRTdCLENBRUEsVUFBQUcsR0FDSSxJQUFJQyxFQUFVaEIsS0FBS0MsUUFBUWdCLE9BQzNCLElBQUssSUFBSUMsS0FBS0YsRUFDTWhCLEtBQUtDLFFBQVFZLElBQUlLLEdBSXJDLElBQUssSUFBSUMsS0FBS0MsVUFBV0MsTUFBUUYsRUFBSSxJQUNyQ0csUUFBUUMsSUFBSUwsRUFBSSxPQUFTRyxLQUM3QixHQUlxQixJQUVyQkcsRUFBVyxHQU9mLElBQUssSUFBSU4sRUFBSSxFQUFHQSxFQU5DLEVBTWVBLElBQzVCLElBQUssSUFBSUMsRUFBSSxFQUFHQSxFQVBILEVBT21CQSxJQUFLLENBQ2pDLElBQUlNLEVBQVMsQ0FBQ1AsRUFBR0MsR0FDakJLLEVBQVNWLEtBQUtXLEVBQ2xCLENBTUosSUFBS3JCLEtBQUtvQixFQUNOM0IsRUFBU00sVUFBVUMsR0FJdkIsSUFBS0EsS0FBS29CLEVBVU4sR0FBSXBCLEVBQUUsR0FBRyxFQUFJLEdBQUtBLEVBQUUsR0FBRyxFQUFJLEVBQUcsQ0FDMUIsSUFBSXNCLEVBQU83QixFQUFTUyxVQUFVRixFQUFFLEdBQUcsRUFBRUEsRUFBRSxHQUFHLEdBQUcsR0FDN0NrQixRQUFRQyxJQUFJRyxHQUVaN0IsRUFBU2MsUUFBUVAsRUFBR3NCLEVBQ3hCLENBb0RKSixRQUFRQyxJQUFJMUIsR0FFWnlCLFFBQVFDLElBQUkxQixFQUFTUyxVQUFVLEVBQUUsSUFDakNnQixRQUFRQyxJQUFJMUIsRUFBU1MsVUFBVSxFQUFFLElBWWpDLFNBQXFCcUIsRUFBT0MsR0F1QnhCLElBQUtDLEVBQWFDLEdBQWNqQyxFQUFTUyxVQUFVcUIsRUFBTSxHQUFJQSxFQUFNLEtBckJuRSxTQUE0QkksRUFBTUgsRUFBS0ksRUFBUSxHQUFJQyxFQUFNLElBRXJELEdBQUlGLElBQVNILEVBQWIsQ0FFTyxDQUVILElBQUtNLEVBQVFDLEdBQVN0QyxFQUFTUyxVQUFVeUIsRUFBSyxHQUFJQSxFQUFLLElBQ3ZEQyxFQUFRbEIsS0FBS29CLEdBQ2JELEVBQU1uQixLQUFLb0IsRUFTZixDQUNBWixRQUFRQyxJQUFJUyxFQURaLENBRUosQ0FHT0ksQ0FBbUJQLEVBR1gsQ0FBQyxFQUFFLEdBRnRCLENBRUFRLENBQVksQ0FBQyxFQUFFLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Ata25pZ2h0cy10cmF2YWlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL3RoaXMgcmVhbGx5IGlzbid0IHdvcmtpbmcgb3V0IGZvciBzb21lIHJlYXNvbi4uLiBpJ2xsIGVpdGhlciBjaGVjayBvdXQgdGhlaXIgd2F5LCBvci4uLlxuLy8gbWF5IG5lZWQgYWRqYWNlbmN5IGxpc3QsIHZlbmVyYXRlIHRoZSBncmFwaCByYXRoZXIgdGhhbiB0aGUgdHJlZVxuXG4vLyB3aGF0J3Mgd3Jvbmcgd2l0aCBtZSBzZWFyY2hpbmcgZm9yIHdoYXQgdG8gZG8/XG4vLyBpIGRvbid0IGtub3cgd2hhdCBxdWVzdGlvbnMgdG8gYXNrLi4uIGknbSBibGluZGZvbGRlZFxuXG5jbGFzcyBHcmFwaCB7XG4gICAgY29uc3RydWN0b3IobnVtVmVydGljZXMpIHtcbiAgICAgICAgdGhpcy5udW1WZXJ0aWNlcyA9IG51bVZlcnRpY2VzO1xuICAgICAgICB0aGlzLkFkakxpc3QgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgYWRkVmVydGV4KHYpIHtcbiAgICAgICAgdGhpcy5BZGpMaXN0LnNldCh2LCBbXSlcbiAgICB9XG5cbiAgICBnZXRWZXJ0ZXgoY29sLCByb3cpIHtcbiAgICAgICAgZm9yIChsZXQgW2tleSwgdmFsdWVdIG9mIHRoaXMuQWRqTGlzdCkge1xuICAgICAgICAgICAgaWYgKGNvbCA9PT0ga2V5WzBdICYmIHJvdyA9PT0ga2V5WzFdKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGtleVxuICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZEVkZ2Uodiwgdykge1xuICAgICAgICB0aGlzLkFkakxpc3QuZ2V0KHYpLnB1c2godyk7XG4gICAgICAgIC8vIHRoaXMuQWRqTGlzdC5nZXQodykucHVzaCh2KTtcbiAgICB9XG5cbiAgICBwcmludEdyYXBoKCkge1xuICAgICAgICBsZXQgZ2V0S2V5cyA9IHRoaXMuQWRqTGlzdC5rZXlzKCk7XG4gICAgICAgIGZvciAobGV0IGkgb2YgZ2V0S2V5cykge1xuICAgICAgICAgICAgbGV0IGdldFZhbHVlcyA9IHRoaXMuQWRqTGlzdC5nZXQoaSlcbiAgICAgICAgICAgIGxldCBjb25jID0gXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGogb2YgZ2V0VmFsdWVzKSBjb25jICs9IGogKyBcIiBcIjtcbiAgICAgICAgY29uc29sZS5sb2coaSArIFwiIC0+IFwiICsgY29uYyk7XG4gICAgfVxufVxuXG5cbmxldCBuZXdHcmFwaCA9IG5ldyBHcmFwaCg2NCk7XG4vLyBtYWtlIGEgbmVzdGVkIGFycmF5IG9mIGNvb3JkaW5hdGVzLCB1c2luZyBkb3VibGUgZm9yIGxvb3BcbmxldCB2ZXJ0aWNlcyA9IFtdXG5sZXQgc2lkZUxlbmd0aCA9IDhcblxuLy8gaXQncyBlYXNpZXIgdG8gd3JpdGUgY29kZSB0aGFuIHRvIHJlYWQgY29kZVxuXG4vLyB0aGlzIHBvcHVsYXRlcyB0aGUgdmVydGljZXMgYXJyYXlcbi8vIHNob3VsZCAnZ2l2ZScgNjQgY29vcmRpbmF0ZXNcbmZvciAobGV0IGkgPSAwOyBpIDwgc2lkZUxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaWRlTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IFtpLCBqXVxuICAgICAgICB2ZXJ0aWNlcy5wdXNoKGNvb3JkcylcbiAgICB9XG59XG5cbi8vIGFkZCBhbGwgdGhlc2UgdmVydGljZXMsIHRvIGluc2lkZSB0aGUgb2JqZWN0XG4vLyBhZGQgZWRnZSwgdXNpbmcgc29tZXRoaW5nLi4uIGZvciBlYWNoICwgYWRkIHRoamUgOCBjb3JyZXNwb25kaW5nLCBpZiB0aGV5IGV4aXN0XG5cbmZvciAodiBvZiB2ZXJ0aWNlcykge1xuICAgIG5ld0dyYXBoLmFkZFZlcnRleCh2KTtcbn1cblxuXG5mb3IgKHYgb2YgdmVydGljZXMpIHtcbiAgICAvLyB0cnkgdG8gYWRkIHRoZSAodXAgdG8gKSA4IHBvc3NpYmxlIG1vdmVzIGZvciBlYWNoIHZlcnRleFxuICAgIC8vIGZvciBlYWNoIG9mIHRoZSA4IG1vdmVzLCB0ZXN0IGlmIG91dCBvZiBib3VuZHNcbiAgICAvLyBpZiBub3Qgb3V0IG9mIGJvdW5kcywgZ2V0IHRoZSByZXN1bHRpbmcgdmVydGV4IG9mIHRoZSBtb3ZlLCB0aGVuIGFkZCBpdCB0byB0aGUgbW92ZXMgbGlzdFxuXG4gICAgLy91cnJcbiAgICAvLyBjb25zb2xlLmxvZyh2KVxuXG4gICAgLy8gd2h5IGRvZXNuJ3QgdGhpcyB3b3JrP1xuICAgIC8vdGhlcmUgc2hvdWxkIGJlIGFuIGl0ZW0gdGhhdCBpcyBlcXVhbCB0byBbMiwyXVxuICAgIGlmICh2WzBdKzIgPCA4ICYmIHZbMV0rMSA8IDgpIHtcbiAgICAgICAgbGV0IG1vdmUgPSBuZXdHcmFwaC5nZXRWZXJ0ZXgodlswXSsyLHZbMV0rMSlbMF1cbiAgICAgICAgY29uc29sZS5sb2cobW92ZSlcbiAgICAgICAgLy8gYXJlIHRoZXJlIDIgZWRnZXMgYWRkZWQgaGVyZT9cbiAgICAgICAgbmV3R3JhcGguYWRkRWRnZSh2LCBtb3ZlKVxuICAgIH0gXG4gICAgLy8gaWYgKHZbMF0rMiA8IDggJiYgdlsxXSsxIDwgOCkge1xuICAgIC8vICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdKzIsdlsxXSsxKVswXVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhtb3ZlKVxuICAgIC8vICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgLy8gfSBcblxuICAgIC8vdXVyXG4gICAgLy8gaWYgKHZbMF0rMSA8IDggJiYgdlsxXSsyIDwgOCkge1xuICAgIC8vICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdKzEsdlsxXSsyKVswXVxuICAgIC8vICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgLy8gfSBcblxuICAgIC8vdXVsXG4gICAgLy8gaWYgKHZbMF0tMSA+PTAgJiYgdlsxXSsyIDwgOCkge1xuICAgIC8vICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdLTEsdlsxXSsyKVswXVxuICAgIC8vICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgLy8gfSBcblxuICAgIC8vdWxsXG4gICAgLy8gaWYgKHZbMF0tMiA+PTAgJiYgdlsxXSsxIDwgOCkge1xuICAgIC8vICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdLTIsdlsxXSsxKVswXVxuICAgIC8vICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgLy8gfSBcblxuICAgIC8vZGxsXG4gICAgLy8gaWYgKHZbMF0tMiA+PTAgJiYgdlsxXS0xID49MCkge1xuICAgIC8vICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdLTIsdlsxXS0xKVswXVxuICAgIC8vICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgLy8gfSBcblxuICAgIC8vZGRsXG4gICAgLy8gaWYgKHZbMF0tMSA+PTAgJiYgdlsxXS0yID49MCkge1xuICAgIC8vICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdLTEsdlsxXS0yKVswXVxuICAgIC8vICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgLy8gfSBcblxuICAgIC8vZGRyXG4gICAgLy8gaWYgKHZbMF0rMSA8IDggJiYgdlsxXS0yID49MCkge1xuICAgIC8vICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdKzEsdlsxXS0yKVswXVxuICAgIC8vICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgLy8gfSBcblxuICAgIC8vZHJyXG4gICAgLy8gaWYgKHZbMF0rMiA8IDggJiYgdlsxXS0xID49MCkge1xuICAgIC8vICAgICBsZXQgbW92ZSA9IG5ld0dyYXBoLmdldFZlcnRleCh2WzBdKzIsdlsxXS0xKVswXVxuICAgIC8vICAgICBuZXdHcmFwaC5hZGRFZGdlKHYsIG1vdmUpXG4gICAgLy8gfSBcbn1cblxuXG5cbmNvbnNvbGUubG9nKG5ld0dyYXBoKVxuXG5jb25zb2xlLmxvZyhuZXdHcmFwaC5nZXRWZXJ0ZXgoMiwyKSlcbmNvbnNvbGUubG9nKG5ld0dyYXBoLmdldFZlcnRleCg0LDMpKVxuLy8gdGhlIG1vdmVzIGxpc3QgaGFzIGxlbmd0aCAxNiwgbm90IDhcbi8vIGkgZ2V0IDAsMSBhbmQgNCwzIGluc3RlYWQgb2YgMyw0XG5cbi8vIFRPRE86IG5vdywgdHJhdmVyc2UgdGhpcyBiaXRjaCFcbi8vIHJldHVybiB3aGVuIGEgY2VydGFpbiBwb3NpdGlvbiBpcyByZWFjaGVkLiBobW0sIGhvdyBkbyBpIGJ1aWxkIHRoZSBjb3VudGVyIGFuZCBxdWV1ZT8gd2hhdCB3b3VsZCBpdCBkbz9cbi8vIHRoZXkgc3VnZ2VzdGVkIGxldmVsIE9yZGVyIHRyYXZlcnNhbC4gYnV0IGhvdyBkbyBpICdkaXNyZWdhcmQnIHRoZSBcblxuLy8gc3RhcnQgYW5kIGVuZCBhcmUgYXJyYXlzIHJlcHJlc2VudGluZyBjb29yZGluYXRlc1xuXG4vLyBhZGQgdG8gYW4gYXJyYXkgZm9yIHZpc2l0ZWQgbm9kZXNcbi8vIGFkZCB0byBhbiBhcnJheSBmb3IgdGhlIHF1ZXVlP1xuZnVuY3Rpb24ga25pZ2h0TW92ZXMoc3RhcnQsIGVuZCkge1xuXG4gICAgZnVuY3Rpb24gcmVjdXJzaXZlVHJhdmVyc2FsKG5vZGUsIGVuZCwgdmlzaXRlZD1bXSwgcXVldWU9W10pIHtcbiAgICAgICAgLy8gaWYgdGhlIGVuZCBwb3NpdGlvbiBpcyByZWFjaGVkLCBlbmQgXG4gICAgICAgIGlmIChub2RlID09PSBlbmQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gdGhlc2UgcmVwcmVzZW50IHRoZSBub2RlIGFuZCBpdHMgbW92ZXNcbiAgICAgICAgICAgIGxldCBbdmVydGV4LCBtb3Zlc10gPSBuZXdHcmFwaC5nZXRWZXJ0ZXgobm9kZVswXSwgbm9kZVsxXSlcbiAgICAgICAgICAgIHZpc2l0ZWQucHVzaCh2ZXJ0ZXgpXG4gICAgICAgICAgICBxdWV1ZS5wdXNoKHZlcnRleClcbiAgICAgICAgICAgIC8vIHdoaWxlIChxdWV1ZS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIC8vICAgICBmb3IgKHYgb2YgbW92ZXMpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gZ2V0IHRoZSBjb3JyZXNwb25kaW5nIHZlcnRleCBvZiB0aGUgbW92ZSwgYW5kIGFkZCBpdCB0byB0aGUgcXVldWUgXG4gICAgICAgICAgICAvLyAgICAgICAgIGxldCBbdmVydGV4LCBtb3Zlc10gPSBuZXdHcmFwaC5nZXRWZXJ0ZXgodlswXSwgdlsxXSlcbiAgICAgICAgICAgIC8vICAgICAgICAgLy8gYW5kIHJlY3Vyc2l2ZWx5IGdvIGludG8gZWFjaCBvbmUuLi4gXG5cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codmlzaXRlZClcbiAgICB9XG5cbiAgICBsZXQgW2ZpcnN0VmVydGV4LCBmaXJzdE1vdmVzXSA9IG5ld0dyYXBoLmdldFZlcnRleChzdGFydFswXSwgc3RhcnRbMV0pXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZVRyYXZlcnNhbChmaXJzdFZlcnRleCwgZW5kKVxufVxuXG5rbmlnaHRNb3ZlcyhbMiwyXSwgWzYsNl0pXG5cblxuLy8gdGhpcyBtaWdodCBiZSB0aGUgd3JvbmcgYXBwcm9hY2guXG4vLyBuZWVkIHRvIGJlIHRoaW5raW5nIG9mIGdyYXBocywgdHJlZXMsIG5vZGVzLCBhbmQgcmVjdXJzaW9uLCByYXRoZXIgdGhhbiBwbGFjaW5nIHN0dWZmIGluIGEgZ3JpZFxuLy8ganVzdCBuZWVkIGEgc3RhcnRpbmcgcG9pbnQsIHdpdGhpbiBhIGdyYXBoP1xuLy8gaSBuZWVkIHRvIHVuZGVyc3RhbmQgcmVjdXJzaW9uIGluIGEgZ3JhcGgsIGZpcnN0XG4gICAgLy8gdGhlbiwgaSBuZWVkIHRvIHRoaW5rIGFib3V0IHRoZSBsaXN0IG9mIHN0ZXBzIGxpa2UgYSB0cmVlXG5cbiAgICAvLyBpZiAodlswXSsyIDwgOCAmJiB2WzFdKzEgPCA4KSBuZXdHcmFwaC5hZGRFZGdlKHYsIFt2WzBdKzIsIHZbMV0rMV0pXG4gICAgLy8gaWYgKHZbMF0rMSA8IDggJiYgdlsxXSsyIDwgOCkgbmV3R3JhcGguYWRkRWRnZSh2LCBbdlswXSsxLCB2WzFdKzJdKVxuICAgIC8vIGlmICh2WzBdLTEgPj0wICYmIHZbMV0rMiA8IDgpIG5ld0dyYXBoLmFkZEVkZ2UodiwgW3ZbMF0tMSwgdlsxXSsyXSlcbiAgICAvLyBpZiAodlswXS0yID49MCAmJiB2WzFdKzEgPCA4KSBuZXdHcmFwaC5hZGRFZGdlKHYsIFt2WzBdLTEsIHZbMV0rMV0pXG5cbiAgICAvLyBpZiAodlswXS0yID49MCAmJiB2WzFdLTEgPj0wKSBuZXdHcmFwaC5hZGRFZGdlKHYsIFt2WzBdLTIsIHZbMV0tMV0pXG4gICAgLy8gaWYgKHZbMF0tMSA+PTAgJiYgdlsxXS0yID49MCkgbmV3R3JhcGguYWRkRWRnZSh2LCBbdlswXS0xLCB2WzFdLTJdKVxuICAgIC8vIGlmICh2WzBdKzEgPCA4ICYmIHZbMV0tMiA+PTApIG5ld0dyYXBoLmFkZEVkZ2UodiwgW3ZbMF0rMSwgdlsxXS0yXSlcbiAgICAvLyBpZiAodlswXSsyIDwgOCAmJiB2WzFdLTEgPj0wKSBuZXdHcmFwaC5hZGRFZGdlKHYsIFt2WzBdKzIsIHZbMV0tMV0pXG5cbiAgICAvL3RoaXMgc2hvdWxkIGJlIGxpa2UgYSB0cmVlXG5cbiAgICAvLyB0aGUgd2FyZWhvdXNlXG5cbiAgICAvLyB0aGlzLnV1ciA9IChjb2wrMiA8IDggfHwgcm93KzEgPCA4KSA/IG5ldyBOb2RlKGNvbCArIDEsIHJvdyArIDIpIDogbnVsbFxuICAgIC8vIHRoaXMudXJyID0gKGNvbCsxIDwgOCB8fCByb3crMiA8IDgpID8gbmV3IE5vZGUoY29sICsgMiwgcm93ICsgMSkgOiBudWxsXG4gICAgLy8gdGhpcy5kcnIgPSAoY29sLTEgPCA4IHx8IHJvdysyID4gMCkgPyBuZXcgTm9kZShjb2wgKyAyLCByb3cgLSAxKSA6IG51bGxcbiAgICAvLyB0aGlzLmRkciA9IChjb2wtMSA8IDggfHwgcm93KzEgPiAwKSA/IG5ldyBOb2RlKGNvbCArIDEsIHJvdyAtIDIpIDogbnVsbFxuICAgIC8vIHRoaXMuZGRsID0gKGNvbC0yID4gMCB8fCByb3ctMSA+IDApID8gbmV3IE5vZGUoY29sIC0gMSwgcm93IC0gMikgOiBudWxsXG4gICAgLy8gdGhpcy5kbGwgPSAoY29sLTEgPiAwIHx8IHJvdy0yID4gMCkgPyBuZXcgTm9kZShjb2wgLSAxLCByb3cgLSAyKSA6IG51bGxcbiAgICAvLyB0aGlzLnVsbCA9IChjb2wrMSA+IDAgfHwgcm93LTIgPCA4KSA/IG5ldyBOb2RlKGNvbCAtIDIsIHJvdyArIDEpIDogbnVsbFxuICAgIC8vIHRoaXMudXVsID0gKGNvbCsyID4gMCB8fCByb3ctMSA8IDgpID8gbmV3IE5vZGUoY29sIC0gMSwgcm93ICsgMikgOiBudWxsXG5cbi8vIGRvIGkgbmVlZCB0byBjcmVhdGUgbm9kZXMuLi5cbmNsYXNzIE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGNvbCwgcm93KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBbY29sLCByb3ddXG4gICAgICAgIHRoaXMuY29sID0gY29sXG4gICAgICAgIHRoaXMucm93ID0gcm93XG5cbiAgICAgICAgdGhpcy51dXIgPSBudWxsXG4gICAgICAgIHRoaXMudXJyID0gbnVsbFxuICAgICAgICB0aGlzLmRyciA9IG51bGxcbiAgICAgICAgdGhpcy5kZHIgPSBudWxsXG4gICAgICAgIHRoaXMuZGRsID0gbnVsbFxuICAgICAgICB0aGlzLmRsbCA9IG51bGxcbiAgICAgICAgdGhpcy51bGwgPSBudWxsXG4gICAgICAgIHRoaXMudXVsID0gbnVsbFxuXG4gICAgICAgIC8vIGRvIGkgbmVlZCB0byBjcmVhdGUgOCBwb3RlbnRpYWwgY2hpbGRyZW4/XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25cbiAgICB9XG59XG5cbmNsYXNzIG1vdmVHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvL2NyZWF0ZSBmdW5jdGlvbiB0byBnZW5lcmF0ZSBtb3Zlc1xuICAgICAgICAvLyB0aGlzLnN0YXJ0aW5nUG9zaXRpb24gPSBcbiAgICB9XG59XG5cbi8vIGNvbnN0IHJvb3QgPSBuZXcgTm9kZSgyLDIpXG5cbi8vIGNvbnNvbGUubG9nKHJvb3QpXG5cbmNvbnN0IHN0YXJ0aW5nUG9zaXRpb24gPSBbMiwyXVxuXG4vLyB0aGlzIGRvZXNuJ3Qgd29yayBpIHRoaW5rXG4vL3Bvc2l0aW9uIGlzIGFuIGFycmF5IG9mIGNvb3JkaW5hdGVzXG5mdW5jdGlvbiBjcmVhdGVHcmFwaChwb3NpdGlvbiA9IHN0YXJ0aW5nUG9zaXRpb24pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUocG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdKVxuXG4gICAgLy8gd2hhdCBkbyBpIGRvIGhlcmVcbiAgICAvLyBkbyBpIG5lZWQgYSBxdWV1ZT9cblxuICAgIC8vIGNyZWF0ZSA4IHJlY3Vyc2lvbnNcbiAgICAvLyBuZWVkIHRvIHBhc3MgaW4gYXJyYXkgb2YgY29vcmRpbmF0ZXNcblxuICAgIC8vIGkgbWF5IGhhdmUgdG8gZGVsZXRlIGNoaWxkIG5vZGVzLiBidXQuLi4gdGhlIGlzc3VlIGlzIGkgbmVlZCBhbGwgb2YgdGhlc2VcblxuICAgIC8vIG1heWJlIGNhbid0IGRvIGl0IHRoaXMgd2F5XG4gICAgbm9kZS51dXIgPSAocG9zaXRpb25bMF0rMiA8IDggJiYgcG9zaXRpb25bMV0rMSA8IDgpID8gY3JlYXRlR3JhcGgoW3Bvc2l0aW9uWzBdKzIsIHBvc2l0aW9uWzFdKzFdKSA6IG51bGxcbiAgICBub2RlLnVyciA9IChwb3NpdGlvblswXSsxIDwgOCAmJiBwb3NpdGlvblsxXSsyIDwgOCkgPyBjcmVhdGVHcmFwaChbcG9zaXRpb25bMF0rMSwgcG9zaXRpb25bMV0rMl0pIDogbnVsbFxuICAgIG5vZGUuZHJyID0gKHBvc2l0aW9uWzBdLTEgPj0gMCAmJiBwb3NpdGlvblsxXSsyIDwgOCkgPyBjcmVhdGVHcmFwaChbcG9zaXRpb25bMF0tMSwgcG9zaXRpb25bMV0rMl0pIDogbnVsbFxuICAgIG5vZGUuZGRyID0gKHBvc2l0aW9uWzBdLTIgPiAwICYmIHBvc2l0aW9uWzFdKzEgPCA4KSA/IGNyZWF0ZUdyYXBoKFtwb3NpdGlvblswXS0xLCBwb3NpdGlvblsxXSsxXSkgOiBudWxsXG5cbiAgICBub2RlLmRkbCA9IChwb3NpdGlvblswXS0yID49IDAgJiYgcG9zaXRpb25bMV0tMSA+PSAwKSA/IGNyZWF0ZUdyYXBoKFtwb3NpdGlvblswXS0yLCBwb3NpdGlvblsxXS0xXSkgOiBudWxsXG4gICAgbm9kZS5kbGwgPSAocG9zaXRpb25bMF0tMSA+PSAwICYmIHBvc2l0aW9uWzFdLTIgPj0gMCkgPyBjcmVhdGVHcmFwaChbcG9zaXRpb25bMF0tMSwgcG9zaXRpb25bMV0tMl0pIDogbnVsbFxuICAgIG5vZGUudWxsID0gKHBvc2l0aW9uWzBdKzEgPCA4ICYmIHBvc2l0aW9uWzFdLTIgPj0gMCkgPyBjcmVhdGVHcmFwaChbcG9zaXRpb25bMF0rMSwgcG9zaXRpb25bMV0tMl0pIDogbnVsbFxuICAgIG5vZGUudXVsID0gKHBvc2l0aW9uWzBdKzIgPCA4ICYmIHBvc2l0aW9uWzFdLTEgPj0gMCkgPyBjcmVhdGVHcmFwaChbcG9zaXRpb25bMF0rMiwgcG9zaXRpb25bMV0tMV0pIDogbnVsbFxuXG4gICAgcmV0dXJuIG5vZGVcbn1cblxuLy8gY29uc3QgZ3JhcGggPSBjcmVhdGVHcmFwaCgpO1xuLy8gY29uc29sZS5sb2coZ3JhcGgpXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHN0YXJ0aW5nUG9zaXRpb24oY29sLCByb3cpIHtcbi8vICAgICBpZiAoY29sIDwgMCB8fCBjb2wgPiA3IHx8IHJvdyA8IDAgfHwgcm93ID4gNykgcmV0dXJuXG5cbi8vICAgICAvLyB3aGF0IGRvIGkgZG8gbm93XG5cbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlUG90ZW50aWFsTW92ZShjb2wsIHJvdywgY29sU2hpZnQsIHJvd1NoaWZ0KSB7XG4vLyAgICAgaWYgKGNvbFNoaWZ0ID4gMCkge1xuLy8gICAgICAgICBpZiAoY29sK2NvbFNoaWZ0IDwgOClcbi8vICAgICB9XG5cbi8vIH1cbi8vIGZ1bmN0aW9uIGxpc3RNb3Zlcyhjb2wsIHJvdykge1xuLy8gICAgIC8vcG9zc2libGUgbW92ZXNcblxuLy8gICAgIC8vIGRvIGkgcHVzaCB0aGVzZSB0byBhIHF1ZXVlPyBpcyBsaXN0TW92ZXMgYSByZWN1cnNpdmUgZnVuY3Rpb24/XG4vLyAgICAgaWYgKGNvbCsxIDwgOCB8fCByb3crMiA8IDgpIGNvbCArIDEsIHJvdyArIDJcbi8vICAgICBpZiAoY29sKzEgPCA4IHx8IHJvdysyIDwgOCkgY29sICsgMiwgcm93ICsgMVxuLy8gICAgIGlmIChjb2wrMSA8IDggfHwgcm93KzIgPiAwKSBjb2wgKyAyLCByb3cgLSAxXG4vLyAgICAgaWYgKGNvbCsxIDwgOCB8fCByb3crMiA+IDApIGNvbCArIDEsIHJvdyAtIDJcbi8vICAgICBpZiAoY29sKzEgPiAwIHx8IHJvdysyID4gMCkgY29sIC0gMSwgcm93IC0gMlxuLy8gICAgIGlmIChjb2wrMSA+IDAgfHwgcm93KzIgPiAwKSBjb2wgLSAxLCByb3cgLSAyXG4vLyAgICAgaWYgKGNvbCsxID4gMCB8fCByb3crMiA8IDgpIGNvbCAtIDIsIHJvdyArIDFcbi8vICAgICBpZiAoY29sKzEgPiAwIHx8IHJvdysyIDwgOCkgY29sIC0gMSwgcm93ICsgMlxuXG4vLyB9XG5cbi8vIC8vIG1ha2UgY2VsbCBvYmplY3QgLyBjbGFzc1xuLy8gY2xhc3MgQ2VsbCB7XG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgICAgIHRoaXMudmlzaXRlZCA9IGZhbHNlIFxuLy8gICAgIH1cbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlR2FtZUJvYXJkKCkge1xuLy8gICAgIGxldCBib2FyZCA9IFtdXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHtcblxuLy8gICAgICAgICBsZXQgcm93ID0gW11cbi8vICAgICAgICAgYm9hcmQucHVzaChyb3cpO1xuLy8gICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7IGorKykge1xuLy8gICAgICAgICAgICAgcm93LnB1c2gobmV3IENlbGwpXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG5cbi8vICAgICAvLyBkb2VzIGl0IG1ha2Ugc2Vuc2UgdGhhdCByb3cgYW5kIGNvbHVtbiBhcmUgaW4gdGhpcyBvcmRlci4gaXNuJ3QgaXQgXG4vLyAgICAgLy8gY29sdW1uLCB0aGVuIHJvdz9cbi8vICAgICBmdW5jdGlvbiBwbGFjZVBpZWNlKGNvbCwgcm93KSB7XG4vLyAgICAgICAgIC8vIHNvIGN1cnJlbnRseSwgdGhlIHJvd3MgYXJlIGludmVydGVkOyB0aGV5IHN0YXJ0IGZyb20gdGhlIHRvcCBub3QgdGhlIGJvdHRvbVxuLy8gICAgICAgICBib2FyZFs4IC0gcm93XVtjb2xdLnZpc2l0ZWQgPSB0cnVlXG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gZ2V0Qm9hcmQoKSB7XG4vLyAgICAgICAgIHJldHVybiBib2FyZDtcbi8vICAgICB9XG5cbi8vICAgICByZXR1cm4ge1xuLy8gICAgICAgICBwbGFjZVBpZWNlLFxuLy8gICAgICAgICBnZXRCb2FyZCxcblxuLy8gICAgIH07XG4vLyB9XG5cblxuLy8gLy8gc2hvdWxkIHRoZXJlIGJlIGEga25pZ2h0IG9iamVjdD8gb3Igc2hvdWxkIHRoaXMgYmUgYSBnYW1lQ29udHJvbGxlcj9cbi8vIGZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKCkge1xuLy8gICAgIGNvbnN0IG5ld0JvYXJkID0gY3JlYXRlR2FtZUJvYXJkKClcbi8vICAgICAvLyB0aGlzIG1pZ2h0IGJlIHRlcnJpYmxlIGNvZGUsIGkgbmVlZCB0byByZXZpc2l0IGJ1aWxkaW5nIGEgaG91c2UgYXJ0aWNsZVxuLy8gICAgIGZ1bmN0aW9uIHNldFN0YXJ0aW5nUG9zaXRpb24oY29sLHJvdykge1xuLy8gICAgICAgICBuZXdCb2FyZC5wbGFjZVBpZWNlKGNvbCwgcm93KVxuLy8gICAgICAgICBjb25zb2xlLmxvZyhuZXdCb2FyZC5nZXRCb2FyZCgpKVxuLy8gICAgIH1cblxuLy8gICAgIC8vIGkgbmVlZCB0byBzZXQgYm91bmRzLi4uIHNvbWVob3cuLi4gc28ga25pZ2h0IGRvZXNuJ3QgbW92ZSBvdXQgb2YgdGhlIGdyaWRcbi8vICAgICBmdW5jdGlvbiBsaXN0TW92ZXMoc3RhcnRpbmdQb3NpdGlvbikge1xuXG5cbi8vICAgICAgICAgLy8gLi4uXG4vLyAgICAgfVxuXG4vLyAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgc2V0U3RhcnRpbmdQb3NpdGlvbixcbi8vICAgICB9XG4vLyB9XG5cbi8vIGxldCBnYW1lID0gZ2FtZUNvbnRyb2xsZXIoKTtcbi8vIGdhbWUuc2V0U3RhcnRpbmdQb3NpdGlvbigxLDQpXG4vLyBmdW5jdGlvbiBrbmlnaHRNb3ZlcygpIHtcblxuLy8gfSJdLCJuYW1lcyI6WyJuZXdHcmFwaCIsImNvbnN0cnVjdG9yIiwibnVtVmVydGljZXMiLCJ0aGlzIiwiQWRqTGlzdCIsIk1hcCIsImFkZFZlcnRleCIsInYiLCJzZXQiLCJnZXRWZXJ0ZXgiLCJjb2wiLCJyb3ciLCJrZXkiLCJ2YWx1ZSIsImFkZEVkZ2UiLCJ3IiwiZ2V0IiwicHVzaCIsInByaW50R3JhcGgiLCJnZXRLZXlzIiwia2V5cyIsImkiLCJqIiwiZ2V0VmFsdWVzIiwiY29uYyIsImNvbnNvbGUiLCJsb2ciLCJ2ZXJ0aWNlcyIsImNvb3JkcyIsIm1vdmUiLCJzdGFydCIsImVuZCIsImZpcnN0VmVydGV4IiwiZmlyc3RNb3ZlcyIsIm5vZGUiLCJ2aXNpdGVkIiwicXVldWUiLCJ2ZXJ0ZXgiLCJtb3ZlcyIsInJlY3Vyc2l2ZVRyYXZlcnNhbCIsImtuaWdodE1vdmVzIl0sInNvdXJjZVJvb3QiOiIifQ==