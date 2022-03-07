<template>
  <v-container>
    <template>
      <v-container class="container align-self-center">
        <h2>
          استمارةبيانات المستفيد
        </h2>
      </v-container>
         

      <v-form
      
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <h3>معلومات دفتر العائلة</h3>
        <v-card
          class="d-flex flex-row mb-6"
          :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
          flat
          tile
        >
          <v-col>
            <v-select
              v-model="form.recptype"
              :items="items"
             
              label="طبيعة المستفيد"
              required
            />
          </v-col>
          
          <v-col>
            <v-text-field
              v-model="forms.currentaddress"
             
             
              label="العنوان الحالي"
              required
            />
          </v-col>
          <v-col>
            <v-select
              v-model="form.area"
              :items="areaitem"
              :rules="[v => !!v || 'أدخل المنطقة']"
              label="المنطقة"
              required
            />
          </v-col>
          <v-col>
            <v-select
              v-model="form.addresstype"
              :items="addressitems"
              :rules="[v => !!v || 'أدخل العنوان الحالي']"
              label="نوع العنوان الحالي"
              required
            />
          </v-col>
          <v-col>
            
            <v-text-field
              v-model="form.previousaddress"
              
          
              label="العنوان السابق"
              required
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="form.phoneNumber"
              :counter="10"
              :rules="[v => !!v || 'في حال عدم وجود هاتف يدخل موبايل  ']"
              label="رقم الهاتف"
              required
            ></v-text-field>
          </v-col>

             
    <v-col
     
    >
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
            label="تاريخ نزوح "
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
           </template>
          <v-date-picker
          v-model="form.IDPdate"
          type="month"
          no-title
          scrollable
        >
                </v-date-picker>
      </v-menu>
    </v-col>
 
          <v-col>   
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
          <v-col>
            <v-select
              v-model="form.knowlageselect"
              :items="knowlageitem"
              label="طريقة تعرف على مركز"
              required
            />
          </v-col>
        </v-card>
        
        <h3>معلومات شخصية</h3>
         
        <ul>
          <li
            v-for="(item, i) in forms"
            :key="item.form"
          >
  
            <v-card 
 
              class="d-flex align-content-start flex-wrap"
              color="grey lighten-2"
              flat
              tile
              min-height="200"
            >
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].name"

                 :counter="10"
                  :rules="nameRules"
                  label="الاسم"
                  required
                />
              </v-col>
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].fathername"
                  
                  :counter="10"
                  :rules="nameRules"
                  label="الاب "
                  required
                />
              </v-col>
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].mothername"
                  :counter="10"
                  :rules="nameRules"
                  label="الام "
                  required
                />
              </v-col>
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].nikename"
                  :counter="10"
                  :rules="nameRules"
                  label="الكنية "
                  required
                />
              </v-col>
              <v-col sm="2"> 
                <v-select
                  v-model="forms[i].Gselect"
                  :items="gitems"
                  label="الحالة الاجتماعية:"
                  required
                />
              </v-col>
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].relative"
              
                  :counter="10"
                  :rules="nameRules"
                  label="علاقة مع مقدم الطلب "
                  required
                />
              </v-col>
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].placebirth"
                  :counter="10"
                  :rules="nameRules"
                  label="مكان الولادة"
                  required
                />
              </v-col>
              <v-col>
                  <div>
    
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="form.Birthday"
          label="تاريخ الولادة"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="form.Birthday"
        :active-picker.sync="activePicker"
        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
        min="1950-01-01"
        @change="save"
      ></v-date-picker>
    </v-menu>
  </div>
              </v-col>

          
              <v-col sm="2">
                <v-radio-group
                  v-model="forms[i].gender"
                  column
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
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].nationalty"
                  :counter="10"
                  :rules="nameRules"
                  label="الجنسية "
                  required
                />
              </v-col>

              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].education"
                  :counter="10"
                  :rules="nameRules"
                  label="التعليم "
                  required
                />
              </v-col>

              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].lastwork"
                  
                  label="عمل حالي"
                  required
                />
              </v-col>
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].work"
                  
                  label="عمل سابق"
                  required
                />

              </v-col>
              <v-col sm="2">
                  <v-text-field
                 v-model="forms[i].personalid"
                 label="الرقم الوطني" ></v-text-field>
                </v-col>
              <v-col sm="2">
                <v-text-field
                  v-model="forms[i].mobile"
                  
                  label="رقم جوال "
                :counter="10"
                 :rules="[v => !!v || 'التأكيد على الرقم ']"
                  required
                />
              </v-col>
        
         
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
          <v-col ms='4'>   
           <v-checkbox
          v-model="form.pss"
          hide-details
          label="pss" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].pss"
          :disabled="!form.pss"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
          <v-col ms='4'>
           <v-checkbox
          v-model="form.cp"
          hide-details
          label="cp" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].cp"
          :disabled="!form.cp"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
                    <v-col ms='4'>
           <v-checkbox
          v-model="form.GBV"
          hide-details
          label="GBV" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].GBV"
          :disabled="!form.GBV"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
                    <v-col ms='4'>
           <v-checkbox
          v-model="form.GIKA"
          hide-details
          label="GIKA" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].GIKA"
          :disabled="!form.GIKA"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
                    <v-col ms='4'>
           <v-checkbox
          v-model="form.MIKA"
          hide-details
          label="MIKA" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].MIKA"
          :disabled="!form.MIKA"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>
                  <v-col ms='4'>
           <v-checkbox
          v-model="form.edu"
          hide-details
          label="edu" 
          class="shrink mr-2 mt-0"

        ></v-checkbox>
        <v-text-field
         v-model="forms[i].edu"
          :disabled="!form.edu"
          label="ادخل الخدمة" 
        ></v-text-field>
          </v-col>

          <v-col md="8">
                    <v-text-field
          v-model="forms[i].notes"
        
              label="ملاحظات" 
        ></v-text-field>
          </v-col>
         <v-col md="2">
                    <v-text-field
          v-model="form.username"
        
              label="اسم الموظف" 
        ></v-text-field>
          </v-col>
          

      </v-card>
            
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
          </li>
        </ul>
      
        <export-excel 
          :data="[form, ...forms]"
        >
          <v-btn
            class="mr-4" 
             @click="submit"
          >
            submit
          </v-btn>
        </export-excel>
     
        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>
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
    counter:1 ,

    form: {   
     recptype: null,
      currentaddress:'',
      area:"",
       addresstype: null ,
      previousaddress:'',
        date: null,
      menu: false,
       phoneNumber: "",
      idnumber:'',
     
    
      knowlageselect:null ,
      name: "",
      fathername: "",
      mothername: "",
      nikename: "",
      relative: "",
      placebirth: "",
      gender: null,
      nationalty: "",
      education: "",
      work: "",
      lastwork: "",
        personalid:"",
      mobile: "",
      Gselect: null,
      pss:"",
      
      IDPdate: new Date().toISOString().substr(0, 7),
      menu: false,
      modal: false,
      weakpoint:"" ,
      cp:"",
      GBV:"",
      
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
    areaitem:["مزة","مليحة ","زبداني ","صبورة","داريا"],
    gitems: ["عازب ", "متزوج", "أرمل   ", "مطبق  ", "منفصل "],
    knowlageitem :["جهة حكومية","كلام متداول عبر الآخرين","موظفين عاملين لدى الشريك الذي يدير المركز المجتمعي","منظمة أخرى غير حكومية أو هيئة تابعة للأمم المتحدة","متطوعي الوصول","عن طريق آخر"],
    addressitems: ["ملك","أجار","استضافة","أخرى"],
    multiweakpoint:["شخص بحاجة للمساعدة بموضوع الوثائق","شخص بحاجة للدعم النفسي الاجتماعي","ناجية من العنف القائم على أساس النوع الاجتماعي","امرأة أكثر عرضة للخطر","طفل أكثر عرضة للخطر","مسن أكثر عرضة للخطر","مسن أكثر عرضة للخطر","شخص لديه إعاقة ","حالة صحيةحالة صحية","شخص لا يمتلك وثائق مدنية"]
  }),

  methods: {

          submit() {
       this.$refs.form.validate();
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
