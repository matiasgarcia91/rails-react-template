ActiveAdmin.register Product do
    permit_params :name, :description, :price, :images

    form partial: 'form'

    show do
        attributes_table do
          row :name
          row :description
          row :price
          row :images do |ad|
            ad.images.each do |img|
              span do
                image_tag(img)
              end
            end
          end
        end
      end
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
# permit_params :list, :of, :attributes, :on, :model
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
