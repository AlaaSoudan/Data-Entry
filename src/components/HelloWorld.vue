<template>
  <v-container class="d-flex pa-2"  >
    <template>

         

      <v-form
      
        ref="form"
        v-model="valid"
        lazy-validation
         
        
      >
      <v-col class="d-flex justify-center mb-6">
        <h1 >معلومات دفتر العائلة</h1>
        </v-col>
        <v-card

              class="d-flex align-content-start flex-wrap"
              color="grey lighten-2"
              flat
              tile
              min-height="200"
        >
       <v-row class="mb-6">
          <v-col sm="3">
            <v-select
              v-model="form.recptype"
              :items="items"
             
              label="طبيعة المستفيد"
              required
            />
          </v-col>
          
          <v-col sm="3">
            <v-text-field
              v-model="form.currentaddress"
             
             
              label="العنوان الحالي"
              required
            />
          </v-col>
          <v-col sm="3">
            <v-select
              v-model="form.area"
              :items="areaitem"
              :rules="[v => !!v || 'أدخل المنطقة']"
              label="المنطقة"
              required
            />
          </v-col>
          <v-col sm="3">
            <v-select
              v-model="form.addresstype"
              :items="addressitems"
              :rules="[v => !!v || 'أدخل العنوان الحالي']"
              label="نوع العنوان الحالي"
              required
            />
          </v-col>
           </v-row>
           <v-row class="mb-6">
          <v-col sm="3">
            
            <v-text-field
              v-model="form.previousaddress"
              
          
              label="العنوان السابق"
              required
            />
          </v-col>
          <v-col sm="3">
            <v-text-field
              v-model="form.phoneNumber"
              :counter="10"
              :rules="[v => !!v || 'في حال عدم وجود هاتف يدخل موبايل  ']"
              label="رقم الهاتف"
              required
            ></v-text-field>
          </v-col>
          <v-col sm="5" >
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="auto"
      > 
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="form.IDPdate"
          label="تاريخ نزوح"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
          <v-date-picker
          v-model="form.IDPdate"
          type="month"
          :active-picker.sync="activePicker"
          no-title
          scrollable
        >
                </v-date-picker>
      </v-menu>
          </v-col>
 </v-row>
          <v-col sm="3">   
        <v-text-field
        v-model="form.idnumber"
          :disabled="idnumber"
           :rules="[v => !!v || 'أدخل دفتر العائلة']"
              label="رقم دفتر العائلة" 
        ></v-text-field>
         <v-checkbox
          v-model="idnumber"
          hide-details
          label="رقم دفتر العائلة لا" 
          class="shrink mr-2 mt-0"
        ></v-checkbox>
          </v-col>
          <v-col sm="3">
            <v-select
              v-model="form.knowlageselect"
              :items="knowlageitem"
              label="طريقة تعرف على مركز"
              required
            />
          </v-col>
         
        </v-card>
        
      <v-col class="d-flex justify-center mb-6">
        <h1 >معلومات شخصية </h1>
        </v-col>
         
        <dl>
          <dt
            v-for="(item, i) in forms"
            :key="item.form"
          >
  
            <v-card
              class="d-flex align-content-start flex-wrap"
              color="grey lighten-2"
              flat
              tile
              min-height="200">
              <v-row class="mb-3">
            
              <v-col sm="3">
                <v-text-field
                v-model="forms[i].name"
                :counter="10"
                :rules="nameRules"
                label="الاسم"
                required/>
              </v-col>
              <v-col sm="3">
                <v-text-field
                  v-model="forms[i].fathername"
                  
                  :counter="10"
                  :rules="nameRules"
                  label="الاب "
                  required
                />
              </v-col>
              <v-col sm="3">
                <v-text-field
                  v-model="forms[i].mothername"
                  :counter="10"
                  :rules="nameRules"
                  label="الام "
                  required
                />
              </v-col>
              
              <v-col sm="3">
                <v-text-field
                  v-model="forms[i].nikename"
                  :counter="10"
                  :rules="nameRules"
                  label="الكنية "
                  required
                />
              </v-col>
              </v-row>
              <v-row class="mb-3">
              <v-col sm="3"> 
                <v-select
                  v-model="forms[i].Gselect"
                  :items="gitems"
                  label="الحالة الاجتماعية:"
                  required
                />
              </v-col>
              <v-col sm="3">
                <v-text-field
                  v-model="forms[i].relative"
              
                  :counter="10"
                  :rules="nameRules"
                  label="علاقة مع مقدم الطلب "
                  required
                />
              </v-col>
              <v-col sm="3">
                <v-text-field
                  v-model="forms[i].placebirth"
                  :counter="10"
                  :rules="nameRules"
                  label="مكان الولادة"
                  required
                />
              </v-col>
              <v-col sm="3">
    
    <v-menu
    
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="forms[i].Birthday"
          label="تاريخ الولادة"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="forms[i].Birthday"
        :active-picker.sync="activePicker"
        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
        required
      ></v-date-picker>
    </v-menu>

              </v-col>
              </v-row>
              <v-row class="mb-3">

              <v-col sm="3">
                <v-radio-group
                  v-model="forms[i].gender"
                  column
                  required
                >
                  الجنس
                  <v-radio
                    label="ذكر"
                    value="ذكر"
                  />
                  <v-radio
                    label="انثى"
                    value="انثى"
                  />
                </v-radio-group>
              </v-col>
                
              <v-col sm="3">
               <v-select
              v-model="forms[i].nationalty"
              :items="nationaltyitems"
             
              label="الجنسية "
              required
            />
    
              </v-col>
              <v-col sm="3">
                <v-text-field
                  v-model="forms[i].education"
                  :counter="10"
                  :rules="nameRules"
                  label="التعليم "
                  required
                />
              </v-col>

              <v-col sm="3">
                <v-text-field
                  v-model="forms[i].lastwork"
                  
                  label="عمل حالي"
                  required
                />
              </v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col sm="3">
                <v-text-field
                  v-model="forms[i].work"
                  
                  label="عمل سابق"
                  required
                />

              </v-col>
              <v-col sm="3">
                  <v-text-field
                 v-model="forms[i].personalid"
                 label="الرقم الوطني" ></v-text-field>
                </v-col>
              <v-col sm="3">
                <v-text-field
                  v-model="forms[i].mobile"
                  
                  label="رقم جوال "
                :counter="10"
                 :rules="[v => !!v || 'التأكيد على الرقم ']"
                  required
                />
              </v-col>
</v-row>
      <v-col sm="12" >
        <v-combobox
          v-model="forms[i].weakpoint"
          :items="multiweakpoint"
          label="نقاط ضعف "
          multiple
          outlined
          dense
          :rules="[v => !!v || 'يمكن ادخال أكثر من نقطة ضعف ']"
        ></v-combobox>
      </v-col>
      <v-row class="mb-4">
          <v-col ms='4'>   
           <v-checkbox
           v-model="forms.pss"
          hide-details
          label="pss" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].pss"
          :disabled="!forms.pss"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
          <v-col ms='4'>
           <v-checkbox
          v-model="forms.cp"
          hide-details
          label="cp" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].cp"
          :disabled="!forms.cp"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
          <v-col ms='4'>
           <v-checkbox
          v-model="forms.GBV"
          hide-details
          label="GBV" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].GBV"
          :disabled="!forms.GBV"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
           <v-col ms='4'>
           <v-checkbox
          v-model="forms.GIKA"
          hide-details
          label="GIKA" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].GIKA"
          :disabled="!forms.GIKA"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
           <v-col ms='4'>
           <v-checkbox
          v-model="forms.MIKA"
          hide-details
          label="MIKA" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].MIKA"
          :disabled="!forms.MIKA"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
           <v-col ms='4'>
           <v-checkbox
          v-model="forms.edu"
          hide-details
          label="edu" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].edu"
          :disabled="!forms.edu"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
          </v-row>
<v-row class=" mb-3">
          <v-col sm="10">
                    <v-text-field
          v-model="forms[i].notes"
        
              label="ملاحظات" 
        ></v-text-field>
          </v-col>
         <v-col sm="2">
                    <v-text-field
          v-model="form.username"
        
              label="اسم الموظف" 
        ></v-text-field>
          </v-col>
          
</v-row>
      </v-card>
 <v-col class="d-flex justify-center mb-6">
       <h5>فرد جديد</h5>
        </v-col>

          </dt>
        </dl>
      <v-row class="mb-6">
                    <v-btn
          
              class="mx-2"
              fab
              dark
              color="indigo"
              @click="forms.push({})"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
      </v-row>
       <v-row class="mb-3">
                  <v-btn
            class="mr-4" 
            :disabled="valid"
             @click="submit"
          >
            
         التأكيد
          </v-btn>
              <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          حذف المعلومات
        </v-btn>
         </v-row>
        <export-excel 
        :data="[form, ...forms]"
        
    class   = "btn btn-default"
:fields = "json_fields"
   
    name  = "استمارة مستفيد.xls"
        @click="excel" 
        >
                  <v-btn
                  color="success"
            class="mr-4" 


          >
            
            حفظ معلومات المستفيد
          </v-btn>
        </export-excel>
     
  
      </v-form>
    </template>
  </v-container>
</template>

<script>
import Vue from "vue";
import excel from "vue-excel-export";

Vue.use(excel);

export default {
   
  data: () => ({
    json_fields: {
            'طبيعة المستفيد': 'recptype',
            'سكن الحالي': 'currentaddress',
            'المنطقة': 'area',
            'طبيعة السكن': 'addresstype',
            'السكن السابق': 'previousaddress',
            'تاريخ النزوح': 'IDPdate',
            'رقم دفتر العائلة': 'idnumber',
            'طريقة التعرف على المركز': 'knowlageselect',
            'الاسم': 'name',
            'اسم الاب': 'fathername',
            'اسم الام': 'mothername',
            'الكنية': 'nikename',
            'علاقة مع مقدم الطلب': 'relative',
            'مكان الولادة': 'placebirth',
            'تاريخ الولادة': 'Birthday',
            'الجنس': 'gender',
            'الجنسية': 'nationalty',
            'التعليم': 'education',
            'العمل الحالي': 'work',
            'العمل السابق': 'lastwork',
            ' رقم الهوية': 'personalid',
            'موبايل': 'mobile',
            'الحالة الاجتماعية': 'Gselect',
             'نقاط الضعف': 'weakpoint',
              ' الدعم النفسي': 'pss',
               'حماية الطفل': 'cp',
            ' العنف القائم على النوع المجتمعي': 'GBV',
            'مساعدة عينية': 'GIKA',
            ' مساعدة طبية ': 'MIKA',
            'ملاحظات': 'notes',
            'اسم الموظف': 'username',

               

            
             },
    counter:1 ,

    form: {   
     recptype: null,
      currentaddress:"",
      area:"",
      addresstype: null ,
      previousaddress:'',
      IDPdate: "",
      phoneNumber: "",
      idnumber:'',
      knowlageselect:null ,
      name: "",
      fathername: "",
      mothername: "",
      nikename: "",
      relative: "",
      placebirth: "",
      Birthday:"",
      gender: null,
      nationalty: "",
      education: "",
      work: "",
      lastwork: "",
      personalid:"",
      mobile: "",
      Gselect: null,
      weakpoint:"" ,
      pss:null,
      cp:"",
      GBV:"",
      GIKA:null ,
      MIKA:"",
      notes:"",
      username:"",
    }, 
  
    
    
    // first things first, let's just group ur form in one object

 
    forms: [
      {},
    ],

 

    valid: true,

  
  
    nameRules: [
      (v) => !!v || "معلومات مطلوبة",
      (v) => (v && v.length <= 10) || "الرجاء التأكد من صحة الاسم ",
    ],

    items: [
        "نازح عائد ", 
        "مضيف",
      "فرد من المجتمع المضيف  ",
      "نازح داخلي عائد",
      "لاجئ عائد إلى سورية ",
      " لاجئ أو طالب لجوء من دواة أخرى"
    ],
    areaitem:["مزة","مليحة ","زبداني ","صبورة","داريا","غزلانية"],
    gitems: ["عازب ", "متزوج", "أرمل   ", "مطلق  ", "منفصل "],
    knowlageitem :["جهة حكومية","كلام متداول عبر الآخرين","موظفين عاملين لدى الشريك الذي يدير المركز المجتمعي","منظمة أخرى غير حكومية أو هيئة تابعة للأمم المتحدة","متطوعي الوصول","عن طريق آخر"],
    addressitems: ["ملك","أجار","استضافة","أخرى"],
    multiweakpoint:["شخص بحاجة للمساعدة بموضوع الوثائق","شخص بحاجة للدعم النفسي الاجتماعي","ناجية من العنف القائم على أساس النوع الاجتماعي","امرأة أكثر عرضة للخطر","طفل أكثر عرضة للخطر","مسن أكثر عرضة للخطر","مسن أكثر عرضة للخطر","شخص لديه إعاقة ","حالة صحيةحالة صحية","شخص لا يمتلك وثائق مدنية"],
    nationaltyitems:["سوري","فلسطني","صومالي","عراقي","أخرى"]
  }),

 IDPdate: new Date().toISOString().substr(0, 4),

 
  methods: {

          submit() {
       this.$refs.form.validate();
      
       
       
         
      },
      excel(){
          location.reload();
      },
     



    reset() {
      this.$refs.form.reset();
    },
      save (Birthday) {
        this.$refs.menu.save(Birthday)
      },
      


  },
};
</script>
