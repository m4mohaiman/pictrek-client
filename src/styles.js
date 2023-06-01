import { makeStyles } from "@material-ui/core";

export default makeStyles(()=>({
    appBar:{
        borderRadius : 15,
        margin: '30px 0',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#efefef'
    },
    heading: {
        color:'#55133B',
        fontWeight:'400',
        textTransform:'Capitalize',
        display:'flex',
        alignItems:'center',
    },
    image:{
        marginLeft:'15px',
    }
}))