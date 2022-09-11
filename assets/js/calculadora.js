var co = new Object;

function recalc_onclick(ctl) {
    if (true) {

        co['XLEW_1_6_2']=eeparseFloatTh(document.getElementById('XLEW_1_6_2').value);
        co['XLEW_1_6_4']=eeparseFloatTh(document.getElementById('XLEW_1_6_4').value);
        co['XLEW_1_6_5']=eeparseFloatTh(document.getElementById('XLEW_1_6_5').value);
        co['XLEW_1_6_7']=document.getElementById('XLEW_1_6_7').value;
        co['XLEW_1_7_2']=eeparseFloatTh(document.getElementById('XLEW_1_7_2').value);
        co['XLEW_1_7_6']=eeparseFloatTh(document.getElementById('XLEW_1_7_6').value);
        co['XLEW_1_8_6']=document.getElementById('XLEW_1_8_6').value;

        calc(co);

        if(typeof ls_ !== 'undefined') {
            ssc.liveshare.coUpdate(co,ctl);
        }

        document.getElementById('XLEW_1_8_7').value=co['XLEW_1_8_7'];
        document.getElementById('XLEW_1_10_4').value=eedisplayFloatNDTh(co['XLEW_1_10_4'],3);
        document.getElementById('XLEW_1_11_4').value=eedisplayFloatNDTh(co['XLEW_1_11_4'],2);
        document.getElementById('XLEW_1_11_6').value=eedisplayFloat(co['XLEW_1_11_6']);
        document.getElementById('XLEW_1_11_7').value=eedisplayFloat(co['XLEW_1_11_7']);
        document.getElementById('XLEW_1_12_4').value=eedisplayFloatNDTh(co['XLEW_1_12_4'],7);
        document.getElementById('XLEW_1_12_6').value=eedisplayFloatNDTh(co['XLEW_1_12_6'],0);
        document.getElementById('XLEW_1_13_1').value=co['XLEW_1_13_1'];
        document.getElementById('XLEW_1_13_4').value=eedisplayFloatNDTh(co['XLEW_1_13_4'],5);
        document.getElementById('XLEW_1_13_6').value=eedisplayFloatNDTh(co['XLEW_1_13_6'],0);
        document.getElementById('XLEW_1_14_2').value=co['XLEW_1_14_2'];
        document.getElementById('XLEW_1_14_4').value=eedisplayFloatNDTh(co['XLEW_1_14_4'],1);
        document.getElementById('XLEW_1_14_6').value=eedisplayFloatNDTh(co['XLEW_1_14_6'],0);
        document.getElementById('XLEW_1_15_1').value=co['XLEW_1_15_1'];
        document.getElementById('XLEW_1_15_2').value=co['XLEW_1_15_2'];
        document.getElementById('XLEW_1_15_4').value=eedisplayFloatNDTh(co['XLEW_1_15_4'],1);
        document.getElementById('XLEW_1_15_6').value=eedisplayFloatNDTh(co['XLEW_1_15_6'],0);
        document.getElementById('XLEW_1_16_1').value=co['XLEW_1_16_1'];
        document.getElementById('XLEW_1_16_7').value=co['XLEW_1_16_7'];
        document.getElementById('XLEW_1_17_1').value=co['XLEW_1_17_1'];
        document.getElementById('XLEW_1_17_7').value=co['XLEW_1_17_7'];
    }
;};

function calc(data) {
    var c1F8=data['XLEW_1_8_6'];
    var c1F7=data['XLEW_1_7_6'];
    var c1B7=data['XLEW_1_7_2'];
    var c1G6=data['XLEW_1_6_7'];
    var c1E6=data['XLEW_1_6_5'];
    var c1D6=data['XLEW_1_6_4'];
    var c1B6=data['XLEW_1_6_2'];
    var c1G8=(((str_eq((c1F8),("S")))?("SIM"):("NÃO")));
    var c1D10=(((((c1B7)*(10000)))/(((c1B6)*(c1D6)))));
    var c1D11=(((((c1D10)*(((((c1B6)/(100)))+(((c1D6)/(100)))))))+(((2)*(Math.sqrt((c1B7)))))));
    var c1F11=(((((c1D11)*(((c1F7)/(1000)))))*(((c1E6)/(1000)))));
    var c1G11=(((((((c1B6)*(c1D6)))<(401)))?(1):(1.5)));
    var c1A13=(((((c1F7)<(4)))?("Junta Fina"):(" ")));
    var c1B14=(((((((c1B6)*(c1D6)))<(401)))?("Consumo Mínimo"):("Consumo Mínimo =")));
    var c1D14=(((((c1B7)*(5)))*(c1G11)));
    var c1A15=(((str_eq((c1F8),("S")))?("Flexível AC-II"):("AC-I")));
    var c1B15=(((((((c1B6)*(c1D6)))<(401)))?("Consumo Máximo"):("Consumo Máximo =")));
    var c1A16=(((str_eq((c1F8),("S")))?("Usar Argamassa tipo AC-II e Rejunte Flexível"):("Usar Argamassa e Rejunte convencionais")));
    var c1G16=(((str_eq((c1G6),("X")))?("AC-III "):(" ")));
    var c1A17=(((((((c1B6)*(c1D6)))>(401)))?("Passar Argamassa no Tardoz"):("Assentamento convencional - movimentar as peças")));
    var c1G17=(((((((c1B6)*(c1D6)))<(900)))?(" "):("ABNT")));
    var c1D12=(((((c1F11)*(700)))*(1.907238838318)));
    var c1F14=(Math.floor((((((c1D14)/(20)))+(0.9)))));
    var c1D15=(((c1D14)*(1.2)));
    var c1F12=(Math.floor((((((c1D12)/(20)))+(0.9)))));
    var c1D13=(((c1D12)*(1.2)));
    var c1F15=(Math.floor((((((c1D15)/(20)))+(0.9)))));
    var c1F13=(Math.floor((((((c1D13)/(20)))+(0.9)))));
    data['XLEW_1_17_7']=c1G17;
    data['XLEW_1_17_1']=c1A17;
    data['XLEW_1_16_7']=c1G16;
    data['XLEW_1_16_1']=c1A16;
    data['XLEW_1_15_6']=c1F15;
    data['XLEW_1_15_4']=c1D15;
    data['XLEW_1_15_2']=c1B15;
    data['XLEW_1_15_1']=c1A15;
    data['XLEW_1_14_6']=c1F14;
    data['XLEW_1_14_4']=c1D14;
    data['XLEW_1_14_2']=c1B14;
    data['XLEW_1_13_6']=c1F13;
    data['XLEW_1_13_4']=c1D13;
    data['XLEW_1_13_1']=c1A13;
    data['XLEW_1_12_6']=c1F12;
    data['XLEW_1_12_4']=c1D12;
    data['XLEW_1_11_7']=c1G11;
    data['XLEW_1_11_6']=c1F11;
    data['XLEW_1_11_4']=c1D11;
    data['XLEW_1_10_4']=c1D10;
    data['XLEW_1_8_7']=c1G8;
};

function postcode() {
};

function TriggerOnchange(hiddenId)
{
    var e = jQuery.Event('change');
    $('#'+hiddenId).trigger(e);
}

var eeisus=1;
var eetrue="TRUE";
var eefalse="FALSE";
var eedec=".";
var eeth=",";
var eedecreg=new RegExp("\\.","g");
var eethreg=new RegExp(",","g");
var eecurrencyreg=new RegExp("[$]","g");
var eepercentreg=new RegExp("%","g");

function str_eq(x,y){if(isNaN(x)&&isNaN(y))return(x.toLowerCase()==y.toLowerCase());else return x==y;};

function myIsNaN(x){return(isNaN(x)||(typeof x=='number'&&!isFinite(x)));};

function round(n,nd){if(isFinite(n)&&isFinite(nd)){var sign_n=(n<0)?-1:1;
    var abs_n=Math.abs(n);
    var factor=Math.pow(10,nd);return sign_n*Math.round(abs_n*factor)/factor;}else{return NaN;}};

var near0RegExp=new RegExp("[.](.*0000000|.*9999999)");

function eedisplayFloat(x){
    if(myIsNaN(x)){
        return Number.NaN;
    }

    else{
        var str=String(x);
        
        if(near0RegExp.test(str)){
            x=round(x,8);
            str=String(x);
        }
        return str.replace(/\./g,eedec);
    }
};

function eeparseFloatTh(str){
    str=String(str).replace(eethreg,"");
    str=String(str).replace(eedecreg,".");
    var res=parseFloat(str);
    if(isNaN(res)){
        return 0;
    }
    else{
        return res;
    }
};

function eedisplayFloatNDTh(x,nd){
    if(myIsNaN(x)){
        return Number.NaN;
    }

    else {
        var res=round(x,nd);
        if(nd>0){
            var str=String(res);
            if(str.indexOf('e')!=-1)return str;
            if(str.indexOf('E')!=-1)return str;
            var parts=str.split('.');
            var res2=eeinsertThousand(parts[0].toString());
            if(parts.length<2) {
                var decimals=('00000000000000').substring(0,nd);
                return(res2+eedec+decimals);
            }
            else {
                var decimals=((parts[1]).toString()+'00000000000000').substring(0,nd);return(res2+eedec+decimals);
            }
        }
        else {
            return(eeinsertThousand(res.toString()));
        }
    }
};

function eeinsertThousand(whole){
    if(whole==""||whole.indexOf("e")>=0){
        return whole;
    }
    else{
        var minus_sign="";
        if(whole.charAt(0)=="-"){
            minus_sign="-";
            whole=whole.substring(1);
        };
        var res="";
        var str_length=whole.length-1;
        for(var ii=0;ii<=str_length;ii++){
            if(ii>0&&ii%3==0) {
                res=eeth+res;
            };
            res=whole.charAt(str_length-ii)+res;
        };
        return minus_sign+res;
    }
};

function submitClick() {
		    check_submit('nocaptcha');
		}
        var submitted=false;
        function check_submit(objcaptcha) {
            if (submitted) {
                alert('You have already submitted the form.  Please be patient.');
                submitted = false;
                return false
            } 
            else {
                recalc_onclick('');
                submitted = true;
                /* unbind the beforeunload event listener attached for LiveShare.  */
                $(window).unbind('beforeunload');
                document.formc.submit();
                return true
            } }
function printClick(){
           recalc_onclick('');		  
           document.getElementById('printallcss').href='';           
           window.print();
		}
function eequerystring(){
    var variable,key,value,ii,querystring,variables;querystring=document.location.search;
    if(querystring.length>0){
        variables=querystring.substring(1).split('&');
        for(ii=0;ii<variables.length;ii++){
            variable=variables[ii].split('=');
            key=unescape(variable[0])
            value=unescape(variable[1]);
            if(document.formc[key]!=null)
                document.formc[key].value=value;
        }
    }
}
function LoadFromQueryString(){
    eequerystring();
};

function navigate(e){
    var t=e.keyCode|e.which;
    if(t!=13&&t!=40&&t!=38)return;
    var n=$(e.target||e.srcElement);
    if(n.is("textarea"))return;
    if(n.is("select")&&(t==38||t==40))return;
    var r=parseInt(n.attr("data-sheet"),10);
    var i=parseInt(n.attr("data-row"),10);
    var s=parseInt(n.attr("data-col"),10);
    var o=false;
    var u=$("#sheet-"+r+"");
    var a='input:not(":hidden,:button,[readonly=readonly],:disabled"),select,a.ui-slider-handle,textarea';
    var f=i+1;
    var l=i-1;
    var c=f;
    var h=l;while(t==40&&f<=c||t==38&&l>=h){
        var p=u.find(a).filter("[data-sheet="+r+"][data-row="+(t==38?l:f)+"][data-col="+s+"]");
        if(p.length>0){
            p.focus();
            if(p.is("input:text, textarea"))p.select();
            o=true;break
        }
        else {
            var d;
            if(u.data("col"+s)==undefined) {
                d=u.find(a).filter("[data-sheet="+r+"][data-col="+s+"]").map(function() {
                    return parseInt($(this).attr("data-row"),10)
                }).toArray();
                u.data("col"+s,d)
            } else {
                d=u.data("col"+s)}c=d[d.length-1];
                h=d[0];
                var v="indexOf"in Array.prototype?d.indexOf(i):$.inArray(i,d);
                if(t==40&&i<c){
                    f=d[v+1]
                }else if(t==38&&i>h){
                    l=d[v-1]
                } else { break}
            }
        } if(!o){
            var m;
            if(t==38)m=parseInt(n.attr("tabindex"),10)-1;
            else m=parseInt(n.attr("tabindex"),10)+1;
                var g=u.find(a).filter("[data-sheet][data-row][data-col][tabindex="+m+"]");
                if(g.length>0){
                    if(g.is(":radio"))g=g.filter(":checked");
                    if(g.length>0){g.focus();
                        if(g.is("input:text, textarea,input:number"))g.select()
                    }
                } else {
                    var y=u.find(a).filter("[data-sheet][data-row][data-col][tabindex]:first");
                    y.focus();
                    if(y.is("input:text, textarea,input:number"))y.select()
                }
            }
            e.preventDefault?e.preventDefault():e.returnValue=false}

var ssccf1n = function(op,id,css,data1){	
    switch(op)
    {
        case 'image':                               
            $('#' + id).attr('src',$('#'+data1).attr('src'));
        break;

    }
}; 

var ssccf4n = function(op,id,colors,data1,data2,data3,data4){
    switch(op)
    {
            
    }
};


// function Porcelanato() {
//     var Porcelanato = document.getElementById("XLEW_1_6_7")
    
//     if (Porcelanato.checked != true) {
//         console.log("1")
        
//         Porcelanato.setAttribute('value','s')
//     } else {
//         Porcelanato.setAttribute('value','n')
//         console.log("2")
//     }
// }



// function AreaExterna() {
//     var AreaExterna = document.getElementById("XLEW_1_8_6")
    
//     if (AreaExterna.checked != true) {
//         console.log("1")
        
//         AreaExterna.setAttribute('value','s')
//     } else {
//         AreaExterna.setAttribute('value','n')
//         console.log("2")
//     }
// }

