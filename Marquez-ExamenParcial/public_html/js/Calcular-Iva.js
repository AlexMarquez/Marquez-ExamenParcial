Ext.application({
   name:'examen-parcial',
   launch:function(){  
    
    Ext.create('Ext.TabPanel',{
       fullscreen:true,
       tabBarPosition:'bottom',
       items:[formularioExamen
           
           
       ]
   }); 
   }
    
});


var formularioExamen={
        xtype:'fieldset',
        title:'Calculo de IVA',
        iconCls:'user',
        items:[
            {
                html:['<center><h1>Calculo de IVA</h1>',
                      '<br>',
                      '<p>Ingrese el valor del subtotal</p>',
                      '</center>'].join('')
            },
            {
                xtype:'textfield',
                id:'Subtotal',
                placeHolder:'Escribe el subtotal'
            },
            {
                xtype:'textfield',
                id:'IVA',
                placeHolder:'Mostrar el IVA'
            },
            {
                xtype:'textfield',
                id:'RET_VA',
                placeHolder:'Mostrar la Retencion del IVA'
            },
            {
                xtype:'textfield',
                id:'ISR',
                placeHolder:'Mostrar el ISR'
            },
            {
                xtype:'textfield',
                id:'Total_Pagar',
                placeHolder:'Total a pagar'
            },
            {
                xtype:'button',
                text:'Calcular',
                ui:'confirm',
                handler:function(){
                    var Subtotal= Ext.getCmp('Subtotal').getValue();
                    var IVA=Subtotal*0.16;
                    Ext.getCmp('IVA').setValue(IVA); 
                    //console.log(IVA);
                    var RET_VA=(IVA/3)*2;
                    Ext.getCmp('RET_VA').setValue(RET_VA);
                    var ISR=Subtotal*0.10;
                    Ext.getCmp('ISR').setValue(ISR);
                    var Total_pagar=Subtotal+RET_VA-IVA -ISR;
                    Ext.getCmp('Total_Pagar').setValue(Total_pagar);
                    
                   
                   // Ext.Msg.alert("El total a pagar es" + Total_pagar);
                }
            }
        ]
}


