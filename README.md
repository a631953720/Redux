# Redux
問題紀錄

<h3>目的:</h3>
想做一個切換開關的按鈕，將Actions跟Compoment用Connect組合在一起，已經確認Actions會成功回傳action物件。嘗試過直接使用dispatch呼叫無法成功修改，有趣的是測試程式是pass的，在測試程式內，boolean有成功修改，但在組件內的boolean卻無法修改，目前找不到原因。

<h3>思路: </h3>
Actions會接收id、power的參數生成一個action物件，透過userContral的Reducer去做行為指派，type為「CHANGE_POWER」時，會指派changeDevicePower去做處理。

<h3>changeDevicePower內部邏輯: </h3>
接收三個參數，state、id、power，其中power預設值undefined，當id與state內的device.id相同時，會修改device.power並回傳新的物件。當power為undefined，會將Device內的power反轉。(PS:power為boolean值)
若power有值，會直接賦予值給device.power。

<h3>疑似設計不良的部分:</h3>
changeDevicePower的power為boolean值，說明了只會有兩種狀態，因此多接收一個power參數似乎有些多餘。假設Device.power為true，在產生action物件時如果將power的參數設為true，原先power.power就為true卻會被指派為true。這樣的行為會令人困惑，之後重寫會更改這裡的處理方式。

<h3>執行結果</h3>
