import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Login:[
      {userid:"raveena", password:1, role:"system admin"},
      {userid:"kavin", password:1, role:"inventry"},
      {userid:"ashik", password:1, role:"biller"},
      {userid:"arivu", password:1, role:"system admin"},
      {userid:"ajith", password:1, role:"manager"},
      {userid:"karthik", password:1, role:"biller"},
    ],
    LoginHistory:[
      // {Name:'k', Login:'a', Logout:'v', Date:'i'},
    ],
    MedicineMaster:[
      {Medicinename:"Paracetamol", Brand:"Calpol"},
      {Medicinename:"Action500", Brand:"Vicks"},
      {Medicinename:"Dolo650", Brand:"M-labs"},
      {Medicinename:"Zyvox", Brand:" 	linezolid"},
      {Medicinename:"Aspirin", Brand:"Dashpirin"},
    ],
    Stock:[
      {MedicineName:"Paracetamol", Quantity:150, UnitPrice:100},
      {MedicineName:"Action500", Quantity:50, UnitPrice:150},
      {MedicineName:"Dolo650", Quantity:80, UnitPrice:180},
      {MedicineName:"Zyvox", Quantity:120, UnitPrice:200},
      {MedicineName:"Aspirin", Quantity:20, UnitPrice:400},
      
    ],

    BillMaster:[
         {BillNo:'101', BillDate:'2023-07-24', BillAmount:1000, BillGST:12, Netprice:1000, userid:'ashik'},
         {BillNo:'2', BillDate:'2023-07-24', BillAmount:1000, BillGST:12, Netprice:1550, userid:'karthik'},
         {BillNo:'3', BillDate:'2023-07-23', BillAmount:1000, BillGST:12, Netprice:2000, userid:'ashik'},
         {BillNo:'4', BillDate:'2023-06-28', BillAmount:1000, BillGST:12, Netprice:2550, userid:'karthik'},
         {BillNo:'5', BillDate:'2023-07-25', BillAmount:1000, BillGST:12, Netprice:2000, userid:'ashik'},
         {BillNo:'6', BillDate:'2023-07-25', BillAmount:1000, BillGST:12, Netprice:2550, userid:'karthik'},
      //  {BillNo:'103', BillDate:'2023-07-17', BillAmount:1000, BillGST:12, Netprice:5000, userid:'kavin'},
    ],

    Medicine_Master:[
      {MedicineName:"",Brand:""},
    ],

    BillDetails:[
       {BillNo:"101", MedicineName:"Aspirin", Quantity:"5", UnitPrice:"5", Amount:"25"},
       {BillNo:"102", MedicineName:"Aspirin", Quantity:"5", UnitPrice:"5", Amount:"25"},

    ],

     Dashboard : {
      role:"",
      userid:"",
    },
  },

  mutations: {
    setLoginHistory(state,value){
      state.LoginHistory.push(value);
    },
    Set_Bill_Master(state,BM){
      state.BillMaster.push(BM);
    },
    Set_Bill_Details(state,BD){
      state.BillDetails.push(BD);
    },
    set_Log_out(state,logout){
      state.LoginHistory.push(logout);
    },
    getDashDetails(state, val){
      state.Dashboard = val;
    },

    // add_Stock(state,val){
    //   state.MedicineMaster.push(val);
    // },

    // addBrand(state,add2){
    //   state.MedicineMaster=add2;
    // }
    // updateStock(state,val){
      // state.Stock=val;
      // for(let i=0; i<this.$store.state.Stock.length; i++){
      //   if(this.$store.state.Stock[i].MedicineName == this.val.MedicineName){
      //     state.Stock.Quantity += this.val.Quantity;
      //     state.Stock.UnitPrice = this.val.U;
      //   }
      // }
    // }
  },
  actions: {},
  modules: {},
});
