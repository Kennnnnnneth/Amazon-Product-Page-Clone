import EStyleSheet from 'react-native-extended-stylesheet';
import { View, Text, } from "react-native"
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';

const api = {
    title: 'Description',
    des: `Sodales ut eu sem integer vitae. Risus in hendrerit gravida rutrum quisque. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Gravida neque convallis a cras. Habitant morbi tristique senectus et. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Eget velit aliquet sagittis id. Habitant morbi tristique senectus et netus et malesuada fames ac. Leo a diam sollicitudin tempor id eu nisl nunc mi. Ut lectus arcu bibendum at varius. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Aliquet nibh praesent tristique magna sit.

    `
}
const x = `<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><b><span
style='font-size:16.0pt;color:black'>Feature &amp; detail</span></b></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Experience the modernized design of the Xbox Wireless Controller
– pulse Red, featuring Sculpted surfaces and refined geometry for enhanced
comfort and effortless control during gameplay</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Stay on target with textured grip on the triggers, bumpers, and
back case and with a new hybrid d-pad for accurate, yet familiar input</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Make the controller your own by customizing button mapping with
the Xbox accessories app.*</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Plug in any compatible headset with the 3.5mm audio headset jack</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Includes Xbox Wireless and Bluetooth technology for wireless
gaming on supported consoles, Windows 10 PCs, Android and iOS phones, and
tablets.*</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Connect using the USB-C port for direct plug and play to console
or PC. Support for AA batteries is included on the rear.</span></p>

<p class=MsoNormal style='margin-bottom:0in;line-height:24.0pt;background:white'><b><span
style='font-size:18.0pt;font-family:"Arial",sans-serif;color:#0F1111'>Product
details</span></b></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Batteries &#8207; : &#8206;&nbsp;2 AA batteries required.
(included)</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Language &#8207; : &#8206;&nbsp;English</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Product Dimensions &#8207; : &#8206;&nbsp;17.5 x 7.1 x 17 cm;
449.06 Grams</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Release date &#8207; : &#8206;&nbsp;Feb. 12 2021</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Manufacturer &#8207; : &#8206;&nbsp;Microsoft CA II</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Place of Business &#8207; : &#8206;&nbsp;MISSISSAUGA, ON, L5N
8L9 CA</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>ASIN &#8207; : &#8206;&nbsp;B0859XT328</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Item model number &#8207; : &#8206;&nbsp;QAU-00011</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol;color:#0F1111'>·<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Country of origin &#8207; : &#8206;&nbsp;China</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:49.5pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>Best Sellers Rank:&nbsp;#30 in Video Games (<a
href="https://www.amazon.ca/gp/bestsellers/videogames/ref=pd_zg_ts_videogames"><span
style='color:#007185'>See Top 100 in Video Games</span></a>)</span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:96.0pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New"'>o<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
</span></span><span style='font-size:10.5pt;font-family:"Arial",sans-serif;
color:#0F1111'>#1 in&nbsp;<a
href="https://www.amazon.ca/gp/bestsellers/videogames/7089325011/ref=pd_zg_hrsr_videogames"><span
style='color:#007185'>Xbox Game Hardware Accessories</span></a></span></p>

<p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:4.15pt;
margin-left:96.0pt;text-indent:-.25in;line-height:normal;background:white'><span
style='font-size:10.0pt;font-family:"Courier New";color:#0F1111'>o<span
style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp; </span></span><span
style='font-size:10.5pt;font-family:"Arial",sans-serif;color:#0F1111'>#3
in&nbsp;<a
href="https://www.amazon.ca/gp/bestsellers/videogames/20974891011/ref=pd_zg_hrsr_videogames"><span
style='color:#007185'>Xbox Series X Controllers</span></a></span></p>

<p class=MsoNormal>&nbsp;</p>
`
export default () => {
    const { width } = useWindowDimensions();
    return <View style={styles.container} >
        <View style={{ marginBottom: styles._va.unit * 0.4 }} ><Text style={styles.h1} >{api.title}</Text></View>
        <View><Text style={[styles.h2, {}]} >{api.des}</Text></View>
        <View><Text style={{ fontSize: 20, fontWeight: '400' }} >{`Dictumst quisque sagittis purus sit amet volutpat consequat. In hac habitasse platea dictumst quisque sagittis purus. Est ultricies integer quis auctor elit sed. Eget arcu dictum varius duis at. Varius morbi enim nunc faucibus. Purus sit amet luctus venenatis lectus magna fringilla urna. Nisi vitae suscipit tellus mauris a diam maecenas sed. Tellus pellentesque eu tincidunt tortor aliquam nulla. Pellentesque nec nam aliquam sem et tortor consequat id. Urna porttitor rhoncus dolor purus non enim praesent elementum facilisis. Scelerisque purus semper eget duis. Est ultricies integer quis auctor elit sed vulputate mi sit. Pellentesque habitant morbi tristique senectus et. A condimentum vitae sapien pellentesque habitant morbi. Diam quam nulla porttitor massa id. Arcu cursus euismod quis viverra nibh. Turpis massa sed elementum tempus egestas sed sed risus pretium.`}</Text></View>
    </View>

}
const styles = EStyleSheet.create({
    container: {
        marginTop: '0.5rem',
        paddingVertical: '1.2rem',
        paddingHorizontal: '1.4rem',
        backgroundColor: '#fff',
    },
    h1: {
        fontSize: '2.2rem',
        fontWeight: '700',
    },
    h2: {
        fontSize: '1.8rem',
        lineHeight: '2.45rem'
    },
    _va: {
        unit: '1rem'
    }

})
