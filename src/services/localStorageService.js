const LocalStorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }

  function _getItemList(item) {
    return JSON.parse(localStorage.getItem(item) || "[]");
  }

  function _setItemList(name, itemList) {
    return localStorage.setItem(name, JSON.stringify(itemList));
  }

  function _clearItemList(name) {
    return localStorage.clear(name);
  }

  return {
    getService: _getService,
    getItem: _getItemList,
    setItem: _setItemList,
    clearItem: _clearItemList,
  };
})();

export default LocalStorageService;
