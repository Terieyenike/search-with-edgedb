module default {
  type SearchItem {
    required name: str;
    required imageId: str;
    required price: int32;
    required description: str {
      default := ""
    }
  }
}
