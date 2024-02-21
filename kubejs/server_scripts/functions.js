// transplant the md5 from `<type's mod>:kjs_<hash>` onto the supplied prefix
function fallback_id(recipe, id_prefix) {
    if (recipe.getId().includes(':kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.getUniqueId());
    }
}