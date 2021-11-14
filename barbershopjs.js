function init(){
    pics_ar=["images/haircut1.jpg","images/haircut2.jpg","images/haircut3.jpg",]
    counterpic=0
   // alert("welcome")
   
}
function nextpic()/*בלחיצת קפתור קדימה הפונקציה הזאת תופעל*/
{
    if (counterpic<pics_ar.length -1) /*אבצע תנאי שהקאונטר יגדל ב1 כל עוד יהיה קטן מאורך המערך*/
    /* נעשה מינוס אחד כי מערך מתחיל ממקום0*/
    {
        counterpic++; 
    }
    else{
        counterpic=0;/*ייגרום לתמונות להיות מחזוריות כלומר ברגע שנגיע לתמונה האחרונה שבה התנאי כבר לא מתקיים יותר יחזור לתמונה הראשונה */
    }
    big_pic.src=pics_ar[counterpic];
}
function backpic()/* בלחיצת כפתור אחורה הפונקציה הזאת תופעל*/
{
    if (counterpic>0)/*תנאי כל עוד קאונטר גדול מ0 כדי שלמשתמש לא תופיע שגיאה שיגיע לתמונה הראשונה וילחץ אחורה */
     {
        counterpic--;  
    }
    else{/*חלק מההפיכה של הצגת התמונות למחזורית יקרה שנלחץ על ללכת אחורה בתמונה הראשונה של אביעד */
        counterpic=pics_ar.length -1;/*במידה והגענו לתמונה הראשונה שמקומה במערך 0 ונרצה שבלחיצה על כפתור באק 
        יחזור לתמונה האחרונה ולא יעצר עליה נשווה את הקאונטר לתא האחרון במערך המסומן כאורכו מינוס אחת*/
    }
    big_pic.src=pics_ar[counterpic];
}



/* מכאן נרשום פונקציה שחוזרת על עצמה שכל פעם שנלחץ על אחת התמונות הקטנות תופיע בתור התמונה הגדולה*/
function onpic1click()
{
    big_pic.src="images/haircut1.jpg"
}
function onpic2click()
{
    big_pic.src="images/haircut2.jpg"
}
function onpic3click()
{
    big_pic.src="images/haircut3.jpg"
}
