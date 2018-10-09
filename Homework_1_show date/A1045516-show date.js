//功能:將整數轉為字串
function itos(temp)
{
	return temp.toString(10);
}

//功能:印出 年、日、小時、分鐘、秒 的中文字串
function print(arr,std,test)
{
	var temp=arr.length;//獲取字串長度
	var store=[];//接收arr的數值轉換過後的中文字串
	var i;//迴圈變數
	//接收arr的數值轉換過後的中文字串
	for(i=0;i<temp;i++) store[i]=std[arr[i]];
	/*判斷字串長度，長度等於4，代表要印出年，長度等於2和1，代表要印出日、小時、分鐘、秒
	，而2和1的區分界線在於是否要在中文字串前頭多補個中文字串 零 或 十*/
	if(temp==4)
	{
		process.stdout.write(store[0]+store[1]+store[2]+store[3]);
	}
	if(temp==2)
	{
		if(store[0]=="一" && store[1]=="零")
		{
			process.stdout.write('十');
		}
		else if(store[0]=="一" &&store[1]!="零")
		{
			process.stdout.write('十'+store[1]);
		}
		else if(store[0]!=null && store[1]=="零")
		{
			process.stdout.write(store[0]+'十');
		}
		else if(store[0]!=null && store[1]!=null)
		{
			process.stdout.write(store[0]+'十'+store[1]);
		}
	}
	//這裡test的用意就是要去偵測是否現在所要印出的中文字串是分鐘或秒的0到9的中文字串
	if(temp==1 && test==0)
	{
		process.stdout.write(store[0]);
	}
	else if(temp==1 && test==1)
	{
		process.stdout.write('零'+store[0]);
	}
}

//功能:用來去印出目前的時間
function show_time(test,check,hour,minute,second,nums)
{
	//偵測現在是上午還是下午
	if(check>12)
	{
		hour=itos(check-12);
		process.stdout.write(times[1]+' ');
	}
	else 
	{
		hour=itos(check);
		process.stdout.write(times[0]+' ');
	}
	print(hour,nums,test);
	process.stdout.write(' 時 ');
	test=1;
	print(minute,nums,test);
	process.stdout.write(' 分 ');
	print(second,nums,test);
	console.log(' 秒 ');
}

//開創一個Date物件
var day=new Date();
//開創week陣列來去儲存星期一到星期五的中文字串
var weeks=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
//開創month陣列來去儲存一月到十二月的中文字串
var months=["一 月","二 月","三 月","四 月","五 月","六 月","七 月","八 月","九 月","十 月","十一 月","十二 月"];
//開創num陣列來去儲存零到九的中文字串
var nums=["零","一","二","三","四","五","六","七","八","九"];
//開創time陣列來去儲存上午和下午兩個中文字串
var times=["上午","下午"];

//印出今天星期幾
console.log('今天是  : '+weeks[day.getDay()]);

//存取年份並轉成字串
var temp_year=day.getFullYear();
var year=itos(temp_year);
//存取月份
var temp_month=day.getMonth();
//存取日期並轉成字串
var temp_date=day.getDate();
var date=itos(temp_date);
var test=0;//測試是否現在所要印的字串是 分鐘 或 秒

//印出今天日期
process.stdout.write('今天日期: 西元 ');
print(year,nums,test);
process.stdout.write(' 年 '+months[temp_month]+' ');
print(date,nums,test);
process.stdout.write(' 日\n'+'現在時間: ');

//存取小時
var temp_hour=day.getHours();
var hour;
//存取分鐘並轉成字串
var temp_minute=day.getMinutes();
var minute=itos(temp_minute);
//存取秒並轉成字串
var temp_second=day.getSeconds();
var second=itos(temp_second);

//印出現在時間
show_time(test,temp_hour,hour,minute,second,nums);