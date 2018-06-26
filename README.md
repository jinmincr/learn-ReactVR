## 背景
- 2016年被誉为虚拟现实的元年，国内外的诸多厂商，如Oculus、HTC、暴风等公司都发布了各自的虚拟现实产品。
- 任天堂发布的增强现实（AR）手游Pokemon Go

## WebVR
- WebVR is an open standard that makes it possible to experience VR in your browser. The goal is to make it easier for everyone to get into VR experiences, no matter what device you have
- The WebVR API is currently available in Firefox Nightly builds, in Chrome 56+ for Android and experimental builds of Chromium for Windows, and in the Samsung Internet Browser for Gear VR. 

[samples](https://webvr.info/samples/)

## ReactVR
- Facebook 在今年4月推出
- 基于React Native研发的
- 封装了JS 3D 引擎Three.js，Three.js内部通过WebGL来将应用展现到页面上
- 使用 WebVR API
- 允许用户在场景中导入360°全景照片和3D模型、添加文本和图像等

![image](http://note.youdao.com/yws/api/personal/file/WEBb8f39201dfc4a7e6cecfa2d2488a2bfd?method=getImage&cstk=IZkw-mx-)


[官网](https://facebook.github.io/react-vr/docs/getting-started.html)


### 说明

- JSX和声明式UI

- 通过asset(path)方法关联相关资源文件，它将会自动解析正确的路径。

- 通过AppRegistry来进行注册。AppRegistry会告诉React VR哪个组件是整个应用程序的根组件。在整个应用程序中AppRegistry.registerComponent 只会调用一次。

- component、props、state、events……
#### layout
使用Flexbox样式布局算法来自动定位组件及其子项。
https://facebook.github.io/react-vr/docs/layout-and-style.html

flexbox：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool

#### 3D坐标与转换
Uses the OpenGL® 3D Coordinate System
![坐标轴](https://facebook.github.io/react-vr/img/coordinates.jpg)

```
style={{ position: 'absolute', transform: [{translate: [0, 0, -6]}]
```

```
style={{
  transform: [{translate: [0, -30, -300]},{ scale : 0.1 },
          {rotateY : 45}, {rotateX : -90} ] }}
```

#### 事件
onEnter、onExit、onMove、onInput
- 'MouseInputEvent', 'KeyboardInputEvent', 'TouchInputEvent', or 'GamepadInputEvent'


### Component

#### View
基础组件，可嵌套。View会根据不同的平台映射成不同的原生组件，比如：UIView,div或者是android.view等等

#### Text
- 用于显示文本字符串的组件，文本及样式支持嵌套。
- <View>节点中不能直接将一个文本字符串放到里面。
- <Text>元素内的所有内容都使用文本布局而不是flexbox布局。这意味着<Text>中的元素不再是矩形，而是在行尾时换行。


```
<Text>
  <Text>First part and </Text>
  <Text>second part</Text>
</Text>
// Text container: all the text flows as if it was one
// |First part |
// |and second |
// |part       |

<View>
  <Text>First part and </Text>
  <Text>second part</Text>
</View>
// View container: each text is its own block
// |First part |
// |and        |
// |second part|
```

#### Sound

```
<Sound source={uri: 'sounds/waterfall.wav'}>

<Sound
  source={{
   ogg: asset('ambient.ogg'),
   mp3: asset('ambient.mp3'),
  }}
/>
```

#### VrButton
捕获事件的包装器，
VrButton支持在用户与之交互时触发声音效果

```
<VrButton
  onClickSound={{
   ogg: asset('click.ogg'),
   mp3: asset('click.mp3'),
  }}>
```
#### Model
渲染3D对象

```
// Model with a material
<Model
  source={{
    obj: asset('sculpture.obj'),
    mtl: asset('sculpture.mtl'),
  }}
/>

// Model without a material
<Model
  source={{
    obj: asset('standalone.obj'),
  }}
/>
```


标签 | 说明
---|---
Box | 盒型3D原始图案
Cylinder | 圆柱3D
Pano | 相对于中心原点半径为1000米的球体范围
Sphere | 球形3D
Video | 2D视频

- lit，texture和wireframe属性

lit属性指定模型是否将受场景中放置的灯的影响；texture是一个字符串，指定要用于模型的纹理的url；wireframe属性指定true将使对象显示为线框。


## ReactVR VS A-Frame
Mozilla的开源项目A-Frame就是一个相对成熟的例子
https://aframe.io/docs/0.5.0/introduction/

http://126kr.com/article/7kx8k1n8hgp