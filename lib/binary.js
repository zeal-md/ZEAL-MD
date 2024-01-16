/**
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                      //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                 //
//                                                                                                      // 
//                                                                                                      //
//                     ███████╗███████╗ █████╗ ██╗         ███╗   ███╗██████╗                           //
//                     ╚════██║██╔════╝██╔══██╗██║         ████╗ ████║██╔══██╗                          //
//                     ███████║███████╗███████║██║         ██╔████╔██║██║  ██║                          //
//                     ██═════╗██╔════╝██╔══██║██║         ██║╚██╔╝██║██║  ██║                          //
//                     ███████║███████║██║  ██║███████╗    ██║ ╚═╝ ██║██████╔╝                          //
//                     ╚══════╝╚══════╝╚═╝  ╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//


CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Zeal_Md
   * @author : Zeal 
   * @description : Zeal_Md ,A Multi-functional whatsapp user bot.
   * @version 1.2.7
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Zeal.
   * © 2024 Zeal_Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.

 **/
async function dBinary(str) {
    var newBin = str.split(" ")
    var binCode = []
    for (i = 0; i < newBin.length; i++) {
        binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
      }
    return binCode.join("")
    }
    
    async function eBinary(str = ''){    
    let res = ''
    res = str.split('').map(char => {       
    return char.charCodeAt(0).toString(2);  
     }).join(' ')
    return res
    }
    
    module.exports = { dBinary, eBinary }
