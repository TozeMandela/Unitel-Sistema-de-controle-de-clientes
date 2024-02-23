

class Client {
   private _Nome: string | undefined;
   private _Sexo: string | undefined;
   private _Idade: number | undefined;
   private _Email: string | undefined;
   private _Data: string | undefined;

   private _Direcao: string | undefined;
   private _Telefone: string | undefined;
   private _status: boolean | undefined;

   constructor(nome: string, sexo: string, data: string, email: string) {
        this._Nome = nome;
        this._Sexo = sexo;
        this._Email = email;
        this._Data = data;
        
        this.setIdade()
   }

   registraNumeroDoClientes(dir: string, tel: string) {
        this._Direcao = dir;
        this._Telefone = tel;
        this._status = true;
   }

   desativarTelefone(){
    this._status = false;
    console.log('====================================');
    console.log('constcto de ', this._Nome, 'desativado com sucesso!');
    console.log('====================================');
   }

   static  mostrarClientesActivos(array: Array<Client>){
    array.forEach((client: Client) => {
        if(client.status === true) console.log('Cliente(s) Activo\n========================================\nnome: ', client.nome, '\nDireção: ', client.direcao  );
    });
}
   
   set nome (n: string) {
    this._Nome = n;
   }

   set sexo (s: string) {
    this.sexo = s;
   }

   private setIdade () {
    this._Idade = new Date().getFullYear() - Number(this._Data?.replace(/(\d{2}[\/\-:]\d{2}[\/\-:])(\d{4})/gi, '$2'));
   }

   set email (e: string) {
    this._Email = e;
   }

    set date (da: string) {
    this._Data = da;
    }

   set direcao (d: string) {
    this._Direcao = d;
   }

   set telefone (t: string) {
    this._Telefone = t;
   }

   set status (st: boolean) {
    this._status = st;
   }

   
   get nome () {
    return this._Nome ?? '';
   }

   get sexo () {
    return this.sexo ?? '';
   }

   get Idade () {
    return this._Idade;
   }

   get email () {
    return this._Email??'';
   }

    get date () {
    return this._Data ?? '';
    }

   get direcao () {
    return this._Direcao ?? '';
   }

   get telefone () {
    return this._Telefone ?? '';
   }

   get status () {
    return this._status ?? false;
   }

}

export {Client}