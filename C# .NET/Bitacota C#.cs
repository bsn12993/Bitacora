/****************** Funciones genericas Bitacora ***************************/

/// <summary>
        /// Metodo que encripta en MD5
        /// </summary>
        /// <param name="str">texto a plano a encriptar</param>
        /// <returns>cadena con el encriptado resultante</returns>
        public static string MD5(string str)
        {
            MD5 md5 = MD5CryptoServiceProvider.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = md5.ComputeHash(encoding.GetBytes(str));
            for (int contador = 0; contador < stream.Length; contador++) sb.AppendFormat("{0:x2}", stream[contador]);
            return sb.ToString();
        }
        /// <summary>
        /// Metodo que encripta en MD5
        /// </summary>
        /// <param name="str">texto a plano a encriptar</param>
        /// <returns>cadena con el encriptado resultante</returns>
        public static string SHA1(string str)
        {
            SHA1 sha1 = SHA1Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha1.ComputeHash(encoding.GetBytes(str));
            for (int contador = 0; contador < stream.Length; contador++) sb.AppendFormat("{0:x2}", stream[contador]);
            return sb.ToString();
        }
        /// <summary>
        /// Metodo que encripta en SHA256
        /// </summary>
        /// <param name="str">texto a plano a encriptar</param>
        /// <returns>cadena con el encriptado resultante</returns>
        public static string SHA256(string str)
        {
            SHA256 sha256 = SHA256Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha256.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }
        /// <summary>
        /// Metodo que encripta en SHA384
        /// </summary>
        /// <param name="str">texto a plano a encriptar</param>
        /// <returns>cadena con el encriptado resultante</returns>
        public static string SHA384(string str)
        {
            SHA384 sha384 = SHA384Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha384.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }
        /// <summary>
        /// Metodo que encripta en SHA512
        /// </summary>
        /// <param name="str">texto a plano a encriptar</param>
        /// <returns>cadena con el encriptado resultante</returns>
        public static string SHA512(string str)
        {
            SHA512 sha512 = SHA512Managed.Create();
            ASCIIEncoding encoding = new ASCIIEncoding();
            byte[] stream = null;
            StringBuilder sb = new StringBuilder();
            stream = sha512.ComputeHash(encoding.GetBytes(str));
            for (int i = 0; i < stream.Length; i++) sb.AppendFormat("{0:x2}", stream[i]);
            return sb.ToString();
        }



/******************************** Generar captcha******************************/

[OutputCache(NoStore=true,Duration=0,VaryByParam="None")]
public FileResult GetCaptchaImage()
{
    CaptchaRandomImage Captcha = new CaptchaRandomImage();
    this.Session["catpcahImageText"] = Captcha.GetRandomString(5);
    Captcha.GenerateImage(this.Session["catpcahImageText"].ToString(), 300, 75, Color.DarkGray, Color.White);
    MemoryStream stram = new MemoryStream();
    Captcha.Image.Save(stram, ImageFormat.Png);
    stram.Seek(0, SeekOrigin.Begin);
    return new FileStreamResult(stram, "Image/png"); 
}



/************************************* Session ****************************************/
/// <summary>
/// Metodo que valida si existe un usuaio autentificado
/// </summary>
/// <returns>true | false</returns>
public static bool ExistUserAuth()
{
    return HttpContext.Current.User.Identity.IsAuthenticated;
}
/// <summary>
/// Metodo que destruye la session
/// </summary>
public static void DestroyUserAuth()
{
    HttpContext.Current.Response.Cookies.Remove("usuarioAuth");
    FormsAuthentication.SignOut();
}
/// <summary>
/// Metodo que obtiene el usuario logueado en session y lo almacena en un objeto
/// </summary>
/// <returns>objeto cUsuario</returns>
public static cUsuario GetUser()
{
    cUsuario userData = null;
    if (HttpContext.Current.User != null && HttpContext.Current.User.Identity is FormsIdentity)
    {
        FormsAuthenticationTicket fat = ((FormsIdentity)HttpContext.Current.User.Identity).Ticket;
        if (fat != null)
        {
            userData = JsonConvert.DeserializeObject<cUsuario>(fat.UserData);
        }
    }
    return userData;
}
/// <summary>
/// Metodo que crea la sesion y almacenar los datos del usuario en session
/// </summary>
/// <param name="usuario">objecto del usuario logueado</param>
public static void AddUserSession(cUsuario usuario)
{
    bool persistencia = true;
    var cookie = FormsAuthentication.GetAuthCookie("usuarioAuth", persistencia);
    cookie.Name = FormsAuthentication.FormsCookieName;
    cookie.Expires = DateTime.Now.AddDays(1);

    var userData = JsonConvert.SerializeObject(usuario);

    var ticket = FormsAuthentication.Decrypt(cookie.Value);
    var newTicket = new FormsAuthenticationTicket(ticket.Version, ticket.Name, ticket.IssueDate, ticket.Expiration, ticket.IsPersistent, userData);
    cookie.Value = FormsAuthentication.Encrypt(newTicket);
    HttpContext.Current.Response.Cookies.Add(cookie);
}


/*
Subir Archivos 

dentro de la etiqueta
<system.webserver>

<security>
      <requestFiltering>
        <!--The default size is 30000000 bytes (28.6 MB). MaxValue is 4294967295 bytes (4 GB)-->
        <!-- 100 MB in bytes -->
        <requestLimits maxAllowedContentLength="104857600" />
      </requestFiltering>
    </security>



Session Login

<authentication mode="Forms">
      <forms name="authenticationUser" cookieless="UseCookies" protection="All" timeout="80"></forms>
    </authentication>    


*/

