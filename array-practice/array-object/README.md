<h1>Array Object Practice</h1>
<p>The files here are practice using array objects. Most of the cool stuff that happens in the background will be shown on the console. The web page itself is going to be pretty bare.</p>
<p>Most objects will be created externally from users or other databases. Creating an object is prety simple. An object is created by initializing the properties of an object. Here's an example code of a basic object:</p>
<em><p>let car = [</p>
<p>{</p>
<p>"color": "blue"</p>
<p>"type": "sedan"</p>
<p>}</p>
<p>]</p></em>
<p>-</p>
<p>There are different ways to work with array objects. Most of these functions work by changing or adding/removing parts of the array objects. </p>
<p>Here are some functions that can add a new array object to an array:</p>
<ul>
    <li><b>.unshift</b> - adds an object to the first index of an array</li>
    <li><b>.push</b> - adds an object to the last index of an array</li>
    <li><b>.slice</b> - can be used to add (& remove) an object at the any specified index of an array</li>
    <li><b>.find</b> - used to return a matching element</li>
    <li><b>.filter</b> - similar to .find() but returns <em>multiple</em> matching elements</li>
    <li><b>.map</b> - transforms an array (of objects) into a new array of different objects</li>
    <li><b>.forEach</b> - is used to go through each array element</li>
    <li><b>.sort</b> - compares 2 array objects to each other and places one higher on the array index (the way it sorts an array depends on the function)</li>
    <li><b>.some</b> - checks if an object element fulfills a conditions ("red", capacity: 5, etc.)</li>
    <li><b>.every</b> - checks if every object element (from all the array indexes) fulfulls a conditions</li>
</ul>